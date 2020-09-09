const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://uol.com.br');

  const labels = await getNewsTitles('.manchete-editorial .relacionadas-simples li', page);

  console.log(labels);

  await browser.close();
})();

async function getNewsTitles(selector, page) {
  return page.$$eval(selector, elems => elems.map(el => el.innerText));
}
