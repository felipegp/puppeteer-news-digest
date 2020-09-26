import prompt from 'prompt';

function getChoiceInput(choices) {
  return new Promise((resolve) => {
    prompt.get([choices], (_, result) => {
      resolve(result[choices]);
    });
  });
}

export default {
  getChoiceInput,
};
