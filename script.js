let input = document.querySelector('.input');
character = document.querySelector('.character');
word = document.querySelector('.word');
readingTime = document.querySelector('.reading-time');
wordLimit = document.querySelector('.word-limit');
WORD_LIMIT = 10;

input.addEventListener('keyup', characterCount);
input.addEventListener('keyup', wordCounter);

function characterCount() {
  character.innerHTML = input.value.length;
}

function wordCounter(e) {
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    let wordsLeft = 10;

    if (words) {
    word.innerHTML = words.length;
    wordLimit.innerHTML = wordsLeft - words.length;
    } else {
        word.innerHTML = 0;
    }

// word Limit block of code
    input.addEventListener("keydown", function (e) {
        words = input.value.match(/\b[-?(\w+)?]+\b/gi);
        if (words) {
            if (words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
                e.preventDefault();
                console.log("Word limit reached");
            }
        }
    });
    //Reading time based on 225 words/min
    
   
}
