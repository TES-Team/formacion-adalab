const { deepStrictEqual } = require('assert')

const dataAccess = {
	url: "",
	checkList: [".icon-logo-bbva"]
}

async function showNavigationBar() {
	const navigationBar = await $('#header-nav')
	
	await navigationBar.waitForDisplayed()
}

async function showIntroductionVideo() {
	const video = await $('.home-video-container__video')
	
	await video.waitForDisplayed()
}

async function showAboutInformation() {
	const aboutTitle = await $('.about .section__title')
	const aboutItem = await $('.about__item')

	await aboutTitle.waitForDisplayed()
	await aboutItem.waitForDisplayed()

}

async function showBlog() {
	const blogTitle = await $('.bg-gray .section__title')
	const blogArticle = await $('.card-article')

	await blogTitle.waitForDisplayed()
	await blogArticle.waitForDisplayed()
}

async function selectMoreInfo() {
	const moreInfo = await $('.show-more')

	await moreInfo.waitForDisplayed()
	await moreInfo.click()
}

async function isBlogPage() {
	const blogBar = await $('.header-nav__link--active')
	const optionActive = await blogBar.getText()
	const expectedOption = 'BLOG'

	await deepStrictEqual(optionActive, expectedOption, `The page isn't blog page`)
}

module.exports = {
	dataAccess,
	showNavigationBar,
	showIntroductionVideo,
	showAboutInformation,
	showBlog,
	selectMoreInfo,
	isBlogPage
}