const assert = require('assert')

const dataAccess = {
	url: "/blog/",
	checkList: [".nav nav-tabs"],
	checkList: [".sort-items-container"]
}

async function showNavigationBar() {
	const navigationBar = await $('#header-nav')
	await navigationBar.waitForDisplayed()
}

async function showListNavs() {
	const listNavs = await $('.nav.nav-tabs')
	await listNavs.waitForDisplayed()
	await listNavs.click()
}

async function showNews() {
	const listNavs = await $('.sort-items-container')
	await listNavs.waitForDisplayed()
	await listNavs.click()
}

async function showBlog() {
	const blogImage = await $('#people-inspired')
	await blogImage.waitForDisplayed()
}


async function showRecentsNews() {
	const recentsNews = await $('#news-recientes')
	await recentsNews.waitForDisplayed()
	await recentsNews.click()
}


async function showOlderNews() {
	const recentsNews = await $('#news-antiguas')
	await recentsNews.waitForDisplayed()
	await recentsNews.click()
}


async function showPopularNews() {
	const recentsNews = await $('#most-popular')
	await recentsNews.waitForDisplayed()
	await recentsNews.click()
}


async function showPopularNews() {
	const recentsNews = await $('#most-popular')
	await recentsNews.waitForDisplayed()
	await recentsNews.click()
}


async function selectBtnLang(language) {
	const languageConverter = {
		'english': 'a[href="https://www.bbvaitspain.com/en/blog/"]'
	}
	const selectBtnLang = await $('#select-lang')
	const languageSelected = await $(languageConverter[language]);

	await selectBtnLang.waitForDisplayed()
	await selectBtnLang.click()
	await languageSelected.click();
	await browser.pause(5000);
}

async function goToLangCa() {
	const url = 'https://www.bbvaitspain.com/ca/blog/';
	assert.ok(url === (await browser.getUrl()));
}

async function goToLangEn() {
	const url = 'https://www.bbvaitspain.com/en/blog/';
	assert.ok(url === (await browser.getUrl()));
}


module.exports = {
	dataAccess,
	showNavigationBar,
	showListNavs,
	showNews,
	showBlog,
	showRecentsNews,
	showOlderNews,
	showPopularNews,
	selectBtnLang,
	goToLangCa,
	goToLangEn
}