const { defineStep } = require('cucumber')
const navigationPage = require('../../page-objects/navigation')

defineStep('access to {string}', navigationPage.goTo);
