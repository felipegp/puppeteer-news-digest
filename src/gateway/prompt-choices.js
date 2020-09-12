import prompt from 'prompt';

function getChoiceInput(choices) {
  return new Promise((resolve) => {
    prompt.get([choices], (error, result) => {
      resolve(result[choices]);
    });
  });
}

export default {
  getChoiceInput,
};
