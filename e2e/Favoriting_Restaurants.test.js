/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant-item__not__found');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  // I.seeElement('#restaurant-list');
  I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant-item__not__found');

  I.amOnPage('/');
  I.wait(3);

  // I.waitForElement('#restaurant-item');
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.wait(5);
  I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurant__name a', 10);
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(10);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  // Adding steps to ensure the iframe does not block interaction
  I.executeScript(() => {
    document.querySelector('#webpack-dev-server-client-overlay').style.display = 'none';
  });

  I.click(locate('.restaurant__name a').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant-item__not__found');
});
