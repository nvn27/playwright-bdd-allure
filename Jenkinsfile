pipeline {
    agent any

    tools {
        nodejs 'NodeJS_26'      // Jenkins tool name
    }

    environment {
        CI = "true"

        // // Useful build metadata
        // BUILD_NUMBER = "${env.BUILD_NUMBER}"
        // BUILD_URL = "${env.BUILD_URL}"
        // JOB_NAME = "${env.JOB_NAME}"
    }

     parameters {
        string(name: 'BROWSER', defaultValue: 'GoogleChrome', description: 'Browser name')
        booleanParam(name: 'HEADLESS', defaultValue: true, description: 'Run in headless mode')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/nvn27/playwright-bdd-allure'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                bat 'npm install'

                if(params.BROWSER == "chromium")
                    bat 'npx playwright install chromium'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script{
                    if(params.HEADLESS == true) {
                        bat "npm run testChrome --project=${params.BROWSER} --headed"
                    } else {
                        bat "npm run testChrome --project=${params.BROWSER}"
                    }
                }
            }
        }

        // stage('Generate Allure Report') {
        //     steps {
        //         bat 'npx allure generate ./allure-results -o ./allure-report'
        //         // bat 'allure generate allure-results --clean'
        //     }
        // }
    }

    post {

        always {

            // Publish Allure report in Jenkins UI
            allure allureVersion: '3', commandline: 'ALLURE_CLI', includeProperties: false, jdk: '', resultPolicy: 'LEAVE_AS_IS', results: [[path: 'allure-results']]

            // allure(
            //     includeProperties: false,
            //     jdk: '',
            //     results: [[path: 'allure-results']]
            // )

            // Archive artifacts
            archiveArtifacts artifacts: 'allure-results/**',
                             fingerprint: true
        }

        success {
            echo 'Tests Passed'
        }

        failure {
            echo 'Tests Failed'
        }
    }
}