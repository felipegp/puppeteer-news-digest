import puppeteer from 'puppeteer';
import prompt from 'prompt';
import { NEWS } from './src/domain/news.js';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const choices = NEWS.reduce((acc, val, index) => {
    return acc + ` [${index}] ${val.title}        `;
  }, '');

  const choice = await new Promise((resolve) => {
    prompt.get([choices], (error, result) => {
      resolve(result[choices]);
    });
  });

  const labels = await getNews(NEWS[choice], page);
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
