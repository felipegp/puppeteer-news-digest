import promptGateway from '../gateway/prompt-choices.js';
import newsGateway from '../gateway/news-gateway.js';
import { NEWS } from '../domain/news.js';

async function execute() {
  const choices = NEWS.reduce((acc, val, index) => {
    return acc + ` [${index}] ${val.title}        `;
  }, '');

  const choice = await promptGateway.getChoiceInput(choices);

  return choice && typeof Number(choice) === 'number' && NEWS[choice]
    ? newsGateway.getNews(NEWS[choice])
    : [];
}

export default {
  execute,
};
