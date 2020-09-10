import puppeteer from 'puppeteer';
import { NEWS } from './src/domain/news.js';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const labels = await getNews(NEWS.HACKERNOON, page);

  console.log(labels);

  await browser.close();
})();

async function getNews(newsType, page) {
  await page.goto(newsType.url);
  return page.$$eval(newsType.selector, (elems) =>
    elems.map((el) => {
      return `${el.textContent} (${el.href})`;
    })
  );
}
