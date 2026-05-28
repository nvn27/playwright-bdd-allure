import { page, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, And, Then } = createBdd();

// POM imports
const HomePage = require('../../pages/home-page.js');

Given(`Launch app`, async ({ page }) => {
    let url = 'https://the-internet.herokuapp.com/';
    await page.goto(url);
    console.log(`URL: ${url}`);
});

When('Verify page title {string}', async ({ page }, pageTitle) => {
    // page objects
    const homePage = new HomePage(page);

    console.log(`Page Title: ${await page.title()}`);
    await expect.soft(await page).toHaveTitle(pageTitle);
});

When('Verify home page heading', async ({ page }) => {
    // Step: And Verify home page heading
    // From: tests\features\home.feature:7:9
});

Then('Verify home page navigation hyperlinks', async ({ page }) => {
    // Step: Then Verify home page navigation hyperlinks
    // From: tests\features\home.feature:8:9
});

