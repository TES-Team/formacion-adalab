# BBVA IT Training Adalab

Testing project about bbvait oficial page for training of Adalab students.

# Scripts

Before of you execute any script of first time remember: `npm i`

## Execute all tests

`npm run test`

## Execute determinate tag

* Simple:

	`npm run test -- --cucumberOpts.tagExpression @globalPosition`

* Compound with or:

	`npm run test -- --cucumberOpts.tagExpression "@globalPositionHappyPath or @globalPositionMoreInfoBlog"`

* Compound with and:

	`npm run test -- --cucumberOpts.tagExpression "@globalPosition and @globalPositionHappyPath"`

## Generate allure report

`npm run report`

## Execute all tests and generate report

`npm run test:report`
