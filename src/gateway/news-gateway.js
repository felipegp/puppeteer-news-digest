import pageConfig from '../config/page-config.js';

async function getNews(newsType) {
  const page = await pageConfig.getPage();
  await page.goto(newsType.url);

  const labels = await page.$$eval(newsType.selector, (elems) =>
    elems.map((el) => {
      return `${el.textContent} (${el.href})`;
    })
  );

  pageConfig.closeBrowser();

  return labels;
}

export default {
  getNews,
};
