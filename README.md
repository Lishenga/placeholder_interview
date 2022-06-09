# Placeholder Interview

In order to be able to run this application, make sure you have installed [nodejs](https://nodejs.org/en/download/) in your PC and you have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) installed.

Run this command `npm i -g @nestjs/cli` and then this command `npm i --f` in the root directory of this test using your commandline.

Once the process ends, run this command next `npm run start:dev` in the root directory of this test using your commandline.

On your computer browser, access the following url [localhost](http://localhost:3001/api). Using the Swagger UI, run a query. The property with `ID` 9 will return results.

Incase of any failure in accessing the Swagger UI, Open [Postman](https://www.postman.com/downloads/canary/) app and run the following `GET` request `localhost:3001/property?id=9`

In order to run the tests for the code, execute this command `npm t` in the root directory of the project.

