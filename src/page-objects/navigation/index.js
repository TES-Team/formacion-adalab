const destinations = {
	"global position": "../global-position",
	"blog position": "../blog-position"
}

async function goTo(destination) {
	const { dataAccess: { url, checkList } } = require(destinations[destination])

	await browser.url(url)
	await reloadIfCookiesMessage(url)

	const checkPromises = checkList.map(async (elementToCheck) => (await $(elementToCheck)).waitForDisplayed())

	await Promise.all(checkPromises)
}

async function reloadIfCookiesMessage(url) {
	const cookiesModal = await $('#js-cookies-close')
	const haveCookiesModal = await cookiesModal.isDisplayed()

	if (haveCookiesModal) {
		await browser.url(url)
	}
}

module.exports = {
	goTo
}
