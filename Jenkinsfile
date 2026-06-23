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

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/nvn27/playwright-bdd-allure'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                // bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm run testChrome'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results --clean'
            }
        }
    }

    post {

        always {

            // Publish Allure report in Jenkins UI
            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )

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