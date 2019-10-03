const { defineStep } = require("cucumber");
const lifeAndCulturePositionPage = require("../../page-objects/life-and-culture-position");

defineStep("can see hero", lifeAndCulturePositionPage.showHero);
defineStep(
  "can see solutions section",
  lifeAndCulturePositionPage.showSolutionsInformation
);
defineStep("can see values section", lifeAndCulturePositionPage.showValuesInfo);
defineStep(
  "can see principles section",
  lifeAndCulturePositionPage.showPrinciplesInfo
);
defineStep(
  "can see information video",
  lifeAndCulturePositionPage.showInformationVideo
);
defineStep("can see advertising", lifeAndCulturePositionPage.showAdvertising);
defineStep("select know more", lifeAndCulturePositionPage.selectKnowMore);
defineStep("is to spotify", lifeAndCulturePositionPage.isToSpotify);
