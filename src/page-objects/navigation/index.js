const destinations = {
	"global position": "../global-position"
}

async function goTo(destiny) {
	const { dataAccess } = require(destinations[destiny])

	await browser.url(dataAccess.url)
	const checkPromises = dataAccess.checkList.map(async (elementToCheck) => (await $(elementToCheck)).waitForDisplayed(15000))

	await Promise.all(checkPromises)
}

module.exports = {
	goTo
}