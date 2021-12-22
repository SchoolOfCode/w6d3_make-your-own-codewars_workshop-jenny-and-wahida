/* 
👉 Write your kata here!

Your function will take in two words. 

If a word includes any characters that aren't letters, return "This is an alien language"
The words must be the same number of letters. If the words do not have the same number of letters, return "It's not a fair fight!"

Each letter in each word has a points value. 
Vowels will score 5 points each, consonants will score 2 points each.
Your function must return the word which has the highest score, along with the score, in the form: ["word", score]
If the score is a draw, return ["tie", score]

Example:

function("hello", "alien"):
function would return ["alien", 19]

function("HOTEL", "CRAMP"):
function would return ["HOTEL", 16]

function("HELLO", "apple"):
function would return ["tie", 16]

function("dopamine", "apple"):
function would return "It's not a fair fight!"

function("letters", "%--"):
function would return "This is an alien language"

*/


//👉 Write the function your CodeWarriors will start with below here:
export function scoreWord (word1, word2) {
    if(word1.match(/[A-Za-z]+/) && word2.match(/[A-Za-z]+/)) {
    if(word1.length === word2.length) {
let word1Score = 0;
let word2Score = 0;
let vowels = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"]
let result = [];

for (let i=0; i<word1.length; i++){
    if(vowels.includes(word1[i])){word1Score += 5} else {word1Score += 2}
}

for (let i=0; i<word2.length; i++){
    if(vowels.includes(word2[i])){word2Score += 5} else {word2Score += 2}
}

if(word1Score > word2Score){
    result.push(word1)
    result.push(word1Score)
} else if (word2Score > word1Score) {
    result.push(word2)
    result.push(word2Score)
} else {
    result.push("tie")
    result.push(word1Score)
}
    return result;
    } 
    else {
        return "It's not a fair fight!"
    }} else {
        return "This is an alien language"
    }
}