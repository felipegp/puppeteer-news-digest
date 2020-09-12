import getNews from './src/usecase/get-news.js';

(async () => {
  const labels = await getNews.execute();
  console.log(labels);
})();
