const dataAccess = {
  url: "",
  checkList: [".footer__main"]
};

async function showLogo() {
  const footerContainter = await $(".footer__main");
  await footerContainter.waitForDisplayed();
}

async function showLinkList() {
  const footerNav = await $(".footer-nav");
  await footerNav.waitForDisplayed();
}

async function showRrss() {
  const footerRrss = await $(".footer-rrss");
  await footerRrss.waitForDisplayed();
}

module.exports = {
  dataAccess,
  showLogo,
  showLinkList,
  showRrss
};
