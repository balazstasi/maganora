function findNumberOfWord(text: string[], word: string): number {
  return text.filter((w) => w === word).length;
}

function popularWords(text: string, words: string[]) {
  const textArray = text
    .toUpperCase()
    .replace(/(\r\n|\n|\r)/gm, " ")
    .split(" ");

  let results: any = {};
  words.forEach((word) => {
    results = { ...results, [word]: findNumberOfWord(textArray, word.toUpperCase()) };
  });

  return results;
}

var popularWordsRegex = (text: string, words: string[]) =>
  words.reduce((r: any, w: string) => {
    r[w] = (text.match(new RegExp("\\b" + w + "\\b", "gmi")) || []).length;
    return r;
  }, {});

console.log(
  popularWords(
    `
When I was One
I had just begun
When I was Two
I was nearly new`,
    ["i", "was", "three", "near"]
  )
);
