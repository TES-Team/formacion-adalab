const assert = require("assert");
const dataAccess = {
  url: "/vida-y-cultura/",
  checkList: [".section-solutions", ".media-section__item__capture"]
};

async function showHero() {
  const hero = await $(".media-section__item__capture");
  const heroTitle = await $(".media-section__item__title");

  await hero.waitForDisplayed();
  await heroTitle.waitForDisplayed();
}

async function showSolutionsInformation() {
  const solutionsText = await $(".section-solutions .row");
  const solutionItem = await $(".solutions-data__number");

  await solutionsText.waitForDisplayed();
  await solutionItem.waitForDisplayed();
}

async function showValuesInfo() {
  const valuesTitle = await $(".section__title");
  const valuesItem = await $(".values-grid__item");
  const valuesItemTitle = await $(".values-grid__item__title");

  await valuesTitle.waitForDisplayed();
  await valuesItem.waitForDisplayed();
  await valuesItemTitle.waitForDisplayed();
}
async function showPrinciplesInfo() {
  const principlesImages = await $(".section-principles__image");
  const principlesTitle = await $(".section-principles__title");
  const principlesText = await $(".section-principles__text");

  await principlesImages.waitForDisplayed();
  await principlesTitle.waitForDisplayed();
  await principlesText.waitForDisplayed();
}
async function showInformationVideo() {
  await browser.pause(2000);
  const videoContainer = await $(".media-section__item__capture");
  const videoInfo = await $(".play");

  await videoContainer.waitForDisplayed();
  await videoInfo.waitForDisplayed();
  await videoInfo.click();
}
async function showAdvertising() {
  const sectionAdvertising = await $(".section-advertising__row");

  await sectionAdvertising.waitForDisplayed();
}
async function selectKnowMore() {
  await browser.pause(2000);
  const knowMoreButton = await $(".button.button--secondary");

  await knowMoreButton.waitForDisplayed();
  await knowMoreButton.click();
}
async function isToSpotify() {
  await browser.pause(2000);
  const tabs = await browser.getWindowHandles();
  const myTab = tabs[tabs.length - 1];

  await browser.switchToWindow(myTab);
  const url = "https://open.spotify.com/user/fem5xdo3tmqg8u5d6ms4b81jz";
  assert.ok(url === (await browser.getUrl()));
}

module.exports = {
  dataAccess,
  showHero,
  showSolutionsInformation,
  showValuesInfo,
  showPrinciplesInfo,
  showInformationVideo,
  showAdvertising,
  selectKnowMore,
  isToSpotify
};
