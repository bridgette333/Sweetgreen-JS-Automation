// import packages 
const { Builder, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { expect } = require("chai");
const xpaths = require('./pageObjects/homepage.js')

describe("Sweetgreen homepage", () => {
    let driver;

    before(() => {
        driver = new Builder().forBrowser("firefox").build();
    })

    it("Should load homepage and correct title", async () => {
        await driver.get("https://order.sweetgreen.com/");
        const title = await driver.getTitle();
        expect(title).to.equal("sweetgreen: Order Online");
        await driver.wait(until.elementLocated(xpaths.SEARCH_BAR), 2000);
    });

    it("Should let user search and navigate to search results", async () => {
        await driver.findElement(xpaths.SEARCH_BAR).sendKeys("Culver City", Key.RETURN);
        await driver.wait(until.elementLocated(xpaths.RESTAURANT_LIST), 3000);
        await driver.wait(until.elementLocated(xpaths.RESTAURANT_MAP), 1000);
    });

    it("Should let user click on a restaurant and navigate to menu page", async () => {
        await driver.wait(until.elementLocated(xpaths.RESTAURANT_THE_LAB), 3000).click();
        await driver.wait(until.elementLocated(xpaths.THE_LAB_FOOD), 2000);
        await driver.wait(until.elementLocated(xpaths.THE_LAB_MENU_PAGE), 1000);
    });

    it("Should display images and data about menu items", async () => {
        await driver.wait(until.elementLocated(xpaths.SPICY_THAI_CHICKEN_BOWL), 3000);
        
        // check that title is right
        const productName = await driver.wait(until.elementLocated(xpaths.PRODUCT_NAME), 1000).getText();
        assert.equal(productName, "Spicy Thai Chicken Bowl");

        // check that calories are right
        const calories = await driver.wait(until.elementLocated(xpaths.PRODUCT_CALORIES), 1000).getText();
        assert.equal(calories, "  -  620 Cal");

        // check that description is right
        const productDescription = await driver.wait(until.elementLocated(xpaths.PRODUCT_DESCRIPTION), 1000).getText();
        assert.equal(productDescription, "Organic arugula, organic wild rice, basil, cucumber, organic carrot, shredded cabbage, toasted almonds, " + 
            "crispy rice, blackened chicken thighs, fresh lime squeeze, spicy cashew dressing");
        
        // check that price is right
        const productCost = await driver.wait(until.elementLocated(xpaths.PRODUCT_COST), 1000).getText();
        assert.equal(productCost, "$12.50");
    });

    after(() => driver && driver.quit());
});
