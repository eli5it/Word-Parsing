let words_long = require("./words_dictionary.json");
const wordsNoSwears = require("./words.json");
const fs = require("fs");

words_long = Object.keys(words_long);

const filterWordsByLength = (words, wordLength) =>
  words.filter((word) => word.length === wordLength);

const generateWords = (wordList, str) => {
  for (let i = 3; i <= 10; i++) {
    const filteredWords = filterWordsByLength(wordList, i);
    const jsonString = JSON.stringify(filteredWords);
    fs.writeFile(`${i}-letter-words-${str}.json`, jsonString, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log(`Succesfully wrote file with ${i} letter words`);
      }
    });
  }
};

generateWords(words_long, "long");
generateWords(wordsNoSwears, "no-swears");
