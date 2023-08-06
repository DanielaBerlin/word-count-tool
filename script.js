let input = document.querySelector('.input');
character = document.querySelector('.character');
word = document.querySelector('.word');
readingTime = document.querySelector('.reading-time');
wordLimit = document.querySelector('.word-limit');
// WORD_LIMIT = 10;

input.addEventListener('keyup', characterCount);
input.addEventListener('keyup', wordCounter);

function characterCount() {
  character.innerHTML = input.value.length;
}

function wordCounter(e) {
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    let wordsLeft = 10;

    word.innerHTML = words.length;
    wordLimit.innerHTML = wordsLeft - words.length;
}
