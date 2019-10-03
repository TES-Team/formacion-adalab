const { defineStep } = require('cucumber')
const blogPositionPage = require('../../page-objects/blog-position')

defineStep('can see list with four links go to navs-tab', blogPositionPage.showListNavs)
defineStep('can see three links go to news', blogPositionPage.showNews)
defineStep('can see blog panel information', blogPositionPage.showBlog)
defineStep('select news-recientes', blogPositionPage.showRecentsNews)
defineStep('can see news-recientes', blogPositionPage.showRecentsNews)
defineStep('select news-antiguas', blogPositionPage.showOlderNews)
defineStep('can see news-antiguas', blogPositionPage.showOlderNews)
defineStep('select most-popular', blogPositionPage.showPopularNews)
defineStep('can see most-popular', blogPositionPage.showPopularNews)
defineStep('select language {string}', blogPositionPage.selectBtnLang)
defineStep('is to lang page Ca', blogPositionPage.goToLangCa)
defineStep('is to lang page En', blogPositionPage.goToLangEn)






