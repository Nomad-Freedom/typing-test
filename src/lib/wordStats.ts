export function getWordsPerMinute(timeElapse: number, correctWords: boolean[]) {
  // find length of correct words
  const newCorrectWords = correctWords.filter((value) => value === true).length;

  const minutes = (60 - timeElapse) / 60;
  return parseInt((newCorrectWords / minutes).toFixed(0));
}
