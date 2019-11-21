// import packages 
const { Builder, By, Key, until } = require("selenium-webdriver");
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
        await driver.wait(until.elementLocated(xpaths.searchBar), 2000);
    });

    it("Should let user search and navigate to search results", async () => {
        await driver.findElement(xpaths.searchBar).sendKeys("Culver City", Key.RETURN);
        await driver.wait(until.elementLocated(xpaths.restaurantList), 3000);
        await driver.wait(until.elementLocated(xpaths.restaurantMap), 1000);
    });

    it("Should let user click on a restaurant and navigate to menu page", async () => {
        await driver.wait(until.elementLocated(xpaths.restaurantTheLab), 3000).click();
        await driver.wait(until.elementLocated(xpaths.theLabFood), 2000);
        await driver.wait(until.elementLocated(xpaths.theLabMenuPage), 1000);
    });

    it("Should display images and data about menu items", async () => {
        await driver.wait(until.elementLocated(xpaths.spicyThaiChickenBowl), 3000);
        
        // check that title is right
        const productName = await driver.wait(until.elementLocated(xpaths.productName), 1000).getText();
        assert.equal(productName, "Spicy Thai Chicken Bowl");

        // check that calories are right
        const calories = await driver.wait(until.elementLocated(xpaths.calories), 1000).getText();
        assert.equal(calories, "  -  620 Cal");

        // check that description is right
        const productDescription = await driver.wait(until.elementLocated(xpaths.productDescription), 1000).getText();
        assert.equal(productDescription, "Organic arugula, organic wild rice, basil, cucumber, organic carrot, shredded cabbage, toasted almonds, " + 
            "crispy rice, blackened chicken thighs, fresh lime squeeze, spicy cashew dressing");
        
        // check that price is right
        const productCost = await driver.wait(until.elementLocated(xpaths.productCost), 1000).getText();
        assert.equal(productCost, "$12.50");
    });

    after(() => driver && driver.quit());
});
