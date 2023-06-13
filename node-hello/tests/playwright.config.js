const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { request } = require('@playwright/test');

setDefaultTimeout(60000)

// Create a new request context
Before(async function () {
   global.request = await request.newContext({
    baseURL: "http://localhost:8000" //kong api base url
   });
});
