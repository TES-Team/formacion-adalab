const { defineStep } = require('cucumber')
const globalPositionPage = require('../../page-objects/global-position')

defineStep('can see navigation bar', globalPositionPage.showNavigationBar)
defineStep('can see introduction video', globalPositionPage.showIntroductionVideo)
defineStep('can see introduction information', globalPositionPage.showAboutInformation)
defineStep('can see blog information', globalPositionPage.showBlog)
defineStep('select show more', globalPositionPage.selectMoreInfo)
defineStep('is to blog page', globalPositionPage.isBlogPage)
