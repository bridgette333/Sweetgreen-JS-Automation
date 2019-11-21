const { By } = require("selenium-webdriver");
module.exports = {
    SEARCH_BAR: (By.xpath("//*[@data-test-id='location-input-text-field']//*[@id='ember1126_search']")),
    RESTAURANT_LIST: (By.xpath("//*[@id='restaurants']")),
    RESTAURANT_MAP: (By.xpath("//*[@class='map-outer small-12 large-7 xxlarge-9']")),
    RESTAURANT_THE_LAB: (By.xpath("//*[@data-test-id='location-restaurant-card-Culver City: The Lab']")),
    THE_LAB_FOOD: (By.xpath("//*[@id='menu']")),
    THE_LAB_MENU_PAGE: (By.xpath("//*[@id='restaurants-menu']")),
    SPICY_THAI_CHICKEN_BOWL: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']")),
    PRODUCT_NAME: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
        "//*[@class='product-name h4 capitalize']")),
    PRODUCT_CALORIES: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
        "//span[@class='product-cals']")),
    PRODUCT_DESCRIPTION: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
        "//p[@class='product-description p-small']")),
    PRODUCT_COST: (By.xpath("//*[@data-test-id='menu-product-name-spicy thai chicken bowl']" +
        "//span[@class='product-cost']"))
};