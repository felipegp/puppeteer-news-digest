import puppeteer from 'puppeteer';

let browser;

async function getPage() {
  browser = await puppeteer.launch();
  return browser.newPage();
}

async function closeBrowser() {
  if (browser) {
    await browser.close();
  }
}

export default {
  getPage,
  closeBrowser,
};
