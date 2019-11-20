// import packages 
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { expect } = require("chai");

describe("Sweetgreen homepage", () => {
    let driver;

    before(() => {
        driver = new Builder().forBrowser("firefox").build();
    })

    it("Should load homepage and correct title", async () => {
        await driver.get("https://order.sweetgreen.com/");
        var title = await driver.getTitle();
        expect(title).to.equal("sweetgreen: Order Online");
        await driver.wait(until.elementLocated(By.xpath("//*[@data-test-id='location-input-text-field']//*[@id='ember1126_search']")), 2000);
    });

    it("Should let user search and navigate to search results", async () => {
        await driver.findElement(By.xpath("//*[@data-test-id='location-input-text-field']//*[@id='ember1126_search']")).sendKeys("Culver City", Key.RETURN);
        await driver.wait(until.elementLocated(By.xpath("//*[@id='restaurants']")), 3000);
        await driver.wait(until.elementLocated(By.xpath("//*[@class='map-outer small-12 large-7 xxlarge-9']")), 1000);
    });

    it("Should let user click on a restaurant and navigate to menu page", async () => {
        await driver.wait(until.elementLocated(By.xpath("//*[@data-test-id='location-restaurant-card-Culver City: The Lab']")), 3000).click();
        await driver.wait(until.elementLocated(By.xpath("//*[@id='menu']")));
        await driver.wait(until.elementLocated(By.xpath("//*[@id='restaurants-menu']")));
    });

    it("Should display images and data about menu items", async () => {
        await driver.wait(until.elementLocated(By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']")));
        // check that title is right
        var productName = await driver.wait(until.elementLocated(By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
            "//*[@class='product-name h4 capitalize']"))).getText();
        assert.equal(productName, "Spicy Thai Chicken Bowl");

        // check that calories are right
        var calories = await driver.wait(until.elementLocated(By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
            "//span[@class='product-cals']"))).getText();
        assert.equal(calories, "  -  620 Cal");

        // check that description is right
        var productDescription = await driver.wait(until.elementLocated(By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
            "//p[@class='product-description p-small']"))).getText();
        assert.equal(productDescription, "Organic arugula, organic wild rice, basil, cucumber, organic carrot, shredded cabbage, toasted almonds, " + 
            "crispy rice, blackened chicken thighs, fresh lime squeeze, spicy cashew dressing");
        
        // check that price is right
        var productCost = await driver.wait(until.elementLocated(By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
            "//span[@class='product-cost']"))).getText();
        assert.equal(productCost, "$12.50");
    });

    after(() => driver && driver.quit());
});
