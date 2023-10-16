let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters)
let lettersContainer = document.querySelector(".letters")

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(letter))
    span.classList.add("letter-box")
    lettersContainer.appendChild(span)
})
let words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["prestige", "inception", "parasite", "interstellar", "whiplash", "memento", "coco", "up"],
    people:["Albert Einstein", "Hitchcock", "Alexender", "Cleopatra", "Mahatma Ghandi"],
    countries:["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length)
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName]

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)
let randomValueValue = randomPropValue[randomValueNumber]
// console.log(randomValueValue)
// console.log(randomValueNumber)
// console.log(guessSpans)
let lettersGuessContainer = document.querySelector(".letters-guess")

document.querySelector(".game-info .category span").innerHTML = randomPropName;
let lettersAndSpace = Array.from(randomValueValue)
lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");
    if(letter === ' ') {
        emptySpan.classList.add("with-space") 
    }
    
    lettersGuessContainer.appendChild(emptySpan) 
})

let ok = 0;

let guessSpans = document.querySelectorAll(".letters-guess span")
let wrongAttemps = 0;
let theDraw = document.querySelector(".hangman-draw")



document.addEventListener("click", (e) => {
    let thestatus = false;

    if(e.target.className === 'letter-box') {
        e.target.classList.add("clicked");
        let theClickedLetter = e.target.innerHTML.toLowerCase()
        // console.log(theClickedLetter)
        let thechoosenWord = Array.from(randomValueValue.toLowerCase())
        // console.log(lettersAndSpace)
        thechoosenWord.forEach((wordLetter, wordIndex) => {
            if(theClickedLetter === wordLetter) {
                thestatus = true;
                // console.log(`the index is ${wordIndex}`)
                // console.log(`the letter is ${wordLetter}`)
                // console.log(guessSpans)
                guessSpans.forEach((span, spanIndex) => {
                   if(spanIndex === wordIndex) {
                    // console.log(span)
                    span.className = "done"
                    span.innerHTML = theClickedLetter
                   }
                })
            }
        })


            if (thestatus !== true) {
                wrongAttemps++
                theDraw.classList.add(`wrong-${wrongAttemps}`)
                if(theDraw.classList.contains("wrong-5")) {
                    document.querySelector(".head").style.display = 'block';
                }
                if(theDraw.classList.contains("wrong-6")) {
                    document.querySelector(".body").style.display = 'block';
                }
                if(theDraw.classList.contains("wrong-7")) {
                    document.querySelector(".hands").style.display = 'block';
                }
                if(theDraw.classList.contains("wrong-8")) {
                    document.querySelector(".legs").style.display = 'block';
                }
                if (theDraw.classList.contains("wrong-8")) {
                    lettersContainer.innerHTML = ""
                    let lost = document.createElement("span")
                    lost.appendChild(document.createTextNode("Game Over, .... You Lost"))
                    lost.classList.add("end")
                    lettersContainer.appendChild(lost)
                    let dead = document.createElement("span")
                    dead.classList.add("dead")
                    dead.appendChild(document.createTextNode("The Man Is Dead!"))
                    document.querySelector(".the-man").appendChild(dead)
                    lettersGuessContainer.innerHTML = ""
                    let theWord = document.createElement("div")
                    theWord.classList.add("correct-word")
                    let thisisword = document.createElement("div")
                    thisisword.classList.add("thisisword")
                    theWord.appendChild(document.createTextNode("The Correct Word Is:"))
                    thisisword.appendChild(document.createTextNode(`${randomValueValue}`))
                    console.log(thisisword)
                    theWord.appendChild(thisisword)
                    lettersGuessContainer.appendChild(theWord)
                } 
            } else {
                guessSpans.forEach(span => {
                    if(span.classList.contains("done")) {
                        
                        
                        console.log(guessSpans)
                    }
                })
            }


    }
})

console.log(randomValueValue)
