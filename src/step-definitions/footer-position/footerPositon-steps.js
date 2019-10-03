const { defineStep } = require("cucumber");
const footerPositionPage = require("../../page-objects/footer-position");

defineStep("can see logo BBVA", footerPositionPage.showLogo);
defineStep("can see links", footerPositionPage.showLinkList);
defineStep("can see footer rrss", footerPositionPage.showRrss);
