// const { deepStrictEqual } = require("assert");

const destinations = {
  "Programador Junior Cobol - Banca Privada": "https://www.bbvaitspain.com/oportunidades/programador-junior-cobol-banca-privada/",

  "Programador Front para Mobile - Javascript": "https://www.bbvaitspain.com/oportunidades/programador-front-para-mobile-javascript/",

  "Experto en calidad de software y testing": "bbvaitspain.com/oportunidades/experto-en-calidad-de-software-testing/",

  "Human Resources Business Partner (HRBP)": "https://www.bbvaitspain.com/oportunidades/human-resources-business-partner-hrbp/",

  "Programa de nuevo talento RockIT": "https://www.bbvaitspain.com/oportunidades/programa-de-nuevo-talento-rockit/",

  "Experto Arquitectura APX": "https://www.bbvaitspain.com/oportunidades/experto-arquitectura-apx/",

  "Analista Sistemas Financieros y Actuariales - Madrid": "https://www.bbvaitspain.com/oportunidades/analista-sistemas-financieros-y-actuariales-madrid/",

  "Analista de Sistemas de back Office de Mercados - Madrid": "https://www.bbvaitspain.com/oportunidades/market-back-office-systems-analyst/",

  "Analista Front Global Markets - Madrid": "https://www.bbvaitspain.com/oportunidades/front-end-global-markets-analyst/"
};

const dataAccess = {
  url: "/oportunidades/",
  checkList: [".icon-logo-bbva"]
};

async function showIntroductionImage() {
  const image = await $(".media-section__item__capture");

  await image.waitForDisplayed();
}

async function showOpportunitiesList() {
  const section = await $(".section");
  const filters = await $(".filters-container");
  const opportunitiesList = await $(".opportunities-list");

  await section.waitForDisplayed();
  await filters.waitForDisplayed();
  await opportunitiesList.waitForDisplayed();
}

async function showSendUsYourCV() {
  const sendUsYourCV = await $(".section-send-cv.section.col-lg-12");
  const title = await $(".section-send-cv__intro.col-12.col-md-8.offset-md-2");
  const form = await $("#form_jsu3d6091559650292765");
  await sendUsYourCV.waitForDisplayed();
  await title.waitForDisplayed();
}

async function showMore() {
  const showMore = await ".show-more";
  await showMore.waitForDisplayed();
  await showMore.click();
}

async function incrementDatasetNum() {
  const showMore = await ".show-more";
  const Num = showMore.dataset.num;
  Num === 8 || Num === 12 || Num === 16;
}

async function selectGoToInfo(title) {
  const goToInfo = await $(".opportunity-card__title");
  await goToInfo.waitForDisplayed();
  if (title === goToInfo.getText()) {
    await goToInfo.click();
  }
}

async function isInfoPage(url) {
  url === (await browser.getUrl());
}

// async function showBlog() {
//   const blogTitle = await $(".bg-gray .section__title");
//   const blogArticle = await $(".card-article");

//   await blogTitle.waitForDisplayed();
//   await blogArticle.waitForDisplayed();
// }

// async function selectMoreInfo() {
//   const moreInfo = await $(".show-more");

//   await moreInfo.waitForDisplayed();
//   await moreInfo.click();
// }

// async function isBlogPage() {
//   const blogBar = await $(".header-nav__link--active");
//   const optionActive = await blogBar.getText();
//   const expectedOption = "BLOG";

//   await deepStrictEqual(optionActive, expectedOption, `The page isn't blog page`);
// }

module.exports = {
  dataAccess,
  showIntroductionImage,
  showOpportunitiesList,
  showSendUsYourCV,
  selectGoToInfo,
  isInfoPage,
  showMore,
  incrementDatasetNum
};
