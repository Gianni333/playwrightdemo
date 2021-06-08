const {chromium} = require('playwright');
const expect = require('expect');
let browser;
let page;
beforeAll(async () => {
  browser = await chromium.launch();
});
afterAll(async () => {
  await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

it('logs in', async () => {
  await page.goto('http://automationpractice.com/index.php');
  await page.click('a[class="login"]');
  await page.fill('#email', 'giannirhino@yahoo.co.uk');
  await page.fill('#passwd', 'demouser');
  await page.click('i[class="icon-lock left"]');
  await page.screenshot({path: 'screenshot.png'});
});