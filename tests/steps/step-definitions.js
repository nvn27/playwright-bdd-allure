const { page, expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { Given, When, And, Then, BeforeStep, AfterStep } = createBdd();
const allure = require('allure-js-commons');

const Logger = require('../../logger/logger.js');

const logger = new Logger();

// POM imports
const HomePage = require('../../pages/home-page.js');
// const CustomReporter = require('../../reporters/custom-reporter.js');

BeforeStep(async function ({ page }, step) {
});

AfterStep(async function ({ page }, step) {
    const screenshot = await page.screenshot({
        fullPage: true
    });

    await allure.attachment(`Step Screenshot - ${new Date()}`, screenshot, 'image/png');
});

Given(`Launch app`, async ({ page }) => {
    const responsePromise = page.waitForResponse(response =>
        response.url().includes('herokuapp.com')
        && response.status() === 200
    );

    let url = 'https://the-internet.herokuapp.com/';
    await page.goto(url);
    logger.log(`URL: ${url}`);

    const response = await responsePromise;

    logger.log('network info');
    allure.parameter('Date', `${JSON.stringify(response.headers().date)}`);

    // let keys = await Object.keys(response.headers());

    // logger.log(Object.keys(response.headers()));

    // for (let i = 0; i < 5; i++) {
    //     allure.parameter(keys[i], response.headers().keys[i]);
    // }

    // for (let entry of Object.entries(response.headers())) {
    //     allure.parameter('Entry', entry);
    // }

});

When('Verify page title {string}', async ({ page }, pageTitle) => {
    logger.log(`Page Title: ${await page.title()}`);
    await expect.soft(await page).toHaveTitle(pageTitle);
});

When('Verify home page heading', async ({ page }) => {
    // page objects
    const homePage = new HomePage(page);

    logger.log(`Page Heading: ${await homePage.getPageHeading()}`);
    await expect.soft(await homePage.getPageHeading()).toBe("Welcome to the-internet");
});

Then('Verify home page navigation hyperlinks', async ({ page }) => {
    // page objects
    const homePage = new HomePage(page);

    await expect.soft(await homePage.linkabtesting).toBeVisible();
    await expect.soft(await homePage.linkaddremoveelements).toBeVisible();
    await expect.soft(await homePage.linkbasicauth).toBeVisible();
    await expect.soft(await homePage.linkbrokenimages).toBeVisible();
    await expect.soft(await homePage.linkchallengingdom).toBeVisible();
    await expect.soft(await homePage.linkcheckboxes).toBeVisible();
    await expect.soft(await homePage.linkcontextmenu).toBeVisible();
    await expect.soft(await homePage.linkdigestauthentication).toBeVisible();
    await expect.soft(await homePage.linkdisappearingelements).toBeVisible();
    await expect.soft(await homePage.linkdraganddrop).toBeVisible();
    await expect.soft(await homePage.linkdropdown).toBeVisible();
    await expect.soft(await homePage.linkdynamiccontent).toBeVisible();
    await expect.soft(await homePage.linkdynamiccontrols).toBeVisible();
    await expect.soft(await homePage.linkdynamicloading).toBeVisible();
    await expect.soft(await homePage.linkentryad).toBeVisible();
    await expect.soft(await homePage.linkexitintent).toBeVisible();
    await expect.soft(await homePage.linkfiledownload).toBeVisible();
    await expect.soft(await homePage.linkfileupload).toBeVisible();
    await expect.soft(await homePage.linkfloatingmenu).toBeVisible();
    await expect.soft(await homePage.linkforgotpassword).toBeVisible();
    await expect.soft(await homePage.linkformauthentication).toBeVisible();
    await expect.soft(await homePage.linkframes).toBeVisible();
    await expect.soft(await homePage.linkgeolocation).toBeVisible();
    await expect.soft(await homePage.linkhorizontalslider).toBeVisible();
    await expect.soft(await homePage.linkhovers).toBeVisible();
    await expect.soft(await homePage.linkinfinitescroll).toBeVisible();
    await expect.soft(await homePage.linkinputs).toBeVisible();
    await expect.soft(await homePage.linkjqueryuimenus).toBeVisible();
    await expect.soft(await homePage.linkjavascriptalerts).toBeVisible();
    await expect.soft(await homePage.linkjavascriptonloadeventerror).toBeVisible();
    await expect.soft(await homePage.linkkeypresses).toBeVisible();
    await expect.soft(await homePage.linklargeNdeepdom).toBeVisible();
    await expect.soft(await homePage.linkmultiplewindows).toBeVisible();
    await expect.soft(await homePage.linknestedframes).toBeVisible();
    await expect.soft(await homePage.linknotificationmessages).toBeVisible();
    await expect.soft(await homePage.linkredirectlink).toBeVisible();
    await expect.soft(await homePage.linksecurefiledownload).toBeVisible();
    await expect.soft(await homePage.linkshadowdom).toBeVisible();
    await expect.soft(await homePage.linkshiftingcontent).toBeVisible();
    await expect.soft(await homePage.linkslowresources).toBeVisible();
    await expect.soft(await homePage.linksortabledatatables).toBeVisible();
    await expect.soft(await homePage.linkstatuscodes).toBeVisible();
    await expect.soft(await homePage.linktypos).toBeVisible();
    await expect.soft(await homePage.wysiwygeditor).toBeVisible();
});

