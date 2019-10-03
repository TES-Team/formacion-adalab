const { defineStep } = require("cucumber");
const opportunitiesPositionPage = require("../../page-objects/opportunities-position");

defineStep("can see introduction image", opportunitiesPositionPage.showIntroductionImage);
defineStep("can see opportunities list", opportunitiesPositionPage.showOpportunitiesList);
defineStep("can see send us your CV", opportunitiesPositionPage.showSendUsYourCV);

defineStep("select show more opportunities", opportunitiesPositionPage.showMore);
defineStep("can see more opportunities", opportunitiesPositionPage.incrementDatasetNum);

defineStep("select <title>", opportunitiesPositionPage.selectGoToInfo);
defineStep("is to <url>", opportunitiesPositionPage.isInfoPage);
