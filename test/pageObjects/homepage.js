const { Builder, By, Key, until } = require("selenium-webdriver");
module.exports = {

searchBar: (By.xpath("//*[@data-test-id='location-input-text-field']//*[@id='ember1126_search']")),
restaurantList: (By.xpath("//*[@id='restaurants']")),
restaurantMap: (By.xpath("//*[@class='map-outer small-12 large-7 xxlarge-9']")),
restaurantTheLab: (By.xpath("//*[@data-test-id='location-restaurant-card-Culver City: The Lab']")),
theLabFood: (By.xpath("//*[@id='menu']")),
theLabMenuPage: (By.xpath("//*[@id='restaurants-menu']")),
spicyThaiChickenBowl: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']")),
productName: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
"//*[@class='product-name h4 capitalize']")),
calories: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
"//span[@class='product-cals']")),
productDescription: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
"//p[@class='product-description p-small']")),
productCost: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
"//span[@class='product-cost']"))
};