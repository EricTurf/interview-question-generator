import sanitize from "./helpers";

const interview = input => {
  if (!input) return ``;

  const keyword = sanitize(input);

  const questions = [
    `Would you consider to work with ${keyword}?`,
    `Would you be interested working with ${keyword}?`,
    `Would you consider work related to ${keyword}?`,
    `Would you enjoy work related to ${keyword}?`,
    `Would you want to pursue work related to ${keyword}?`,
    `Is working with ${keyword} something that interests you?`,
    `Is working with ${keyword} something you would consider doing?`,
    `Is working with ${keyword} be something you would enjoy?`,
    `Is working with ${keyword} be something you want to do?`,
    `Is working with ${keyword} in alignment with your goals?`,
    `Does working with ${keyword} seem like something you would enjoy?`,
    `Does working with ${keyword} seem like something you would consider?`,
    `Does working with ${keyword} sound like something you are interested in?`,
    `Have you ever shown interest in ${keyword}?`,
    `Have you ever considered working with ${keyword}?`,
    `Have you ever considered work in ${keyword}?`,
    `Have you ever had any interest working with ${keyword}?`,
    `How does working with ${keyword} changed the way you think?`,
    `Have you used ${keyword} for at least 3 years?`,
    `Can you find a palendrome in a permutation fo ${keyword}?`
    `How does working with ${keyword} change the way you think?`,
    `Do you have prior experience working with ${keyword}?`,
    `Did you enjoy your time working with ${keyword}?`,
    `Would you recommend working with ${keyword}?`,
    `How would you improve working with ${keyword}?`
  ];

  const getRandomIndex = () => Math.floor(Math.random() * questions.length);

  return questions[getRandomIndex()];
};

export default {
  interview
};
