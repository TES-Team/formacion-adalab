const destinations = {
  "global position": "../global-position",
  "life and culture position": "../life-and-culture-position",
  "navigate to spotify": "../life-and-culture-position",
  "footer position": "../footer-position"
};

async function goTo(destination) {
  const {
    dataAccess: { url, checkList }
  } = require(destinations[destination]);

  await browser.url(url);
  await reloadIfCookiesMessage(url);

  const checkPromises = checkList.map(async elementToCheck =>
    (await $(elementToCheck)).waitForDisplayed()
  );

  await Promise.all(checkPromises);
}

async function reloadIfCookiesMessage(url) {
  const cookiesModal = await $("#js-cookies-close");
  const haveCookiesModal = await cookiesModal.isDisplayed();

  if (haveCookiesModal) {
    await browser.url(url);
  }
}

module.exports = {
  goTo
};
