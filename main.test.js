//👉 Write your tests below here:

/* 
👉 Write your kata here!

Your function will take in two words. 
Each letter in each word has a points value. 
Vowels will score 5 points each, consonants will score 2 points each.
Your function must return the word which has the highest score, along with the score, in the form: ["word", score]
If the score is a draw, return ["tie", score]

Inputs will always be strings

Example:

function("hello", "goodbye"):
hello would score 2+5+2+2+5 = 16
goodbye would score 2+5+5+2+2+2+5 = 23
function would return ["goodbye", 23]

function("HELLO", "APPLE"):
hello would score 2+5+2+2+5 = 16
apple would score 5+2+2+2+5 = 16
function would return ["tie", 16]

*/


import { scoreWord } from './main.js';

// check the format of response is correct - i.e. array with 2 elements
// check array[0] = string, array[1] = number

test("Response should be an array with two elements, the first a string, the second a number", function(){
const actual = scoreWord("wordOne", "wordTwo")
const expected = [expect.any(String), expect.any(Number)]
expect(actual).toStrictEqual(expected);
})

test("For inputs of 'hello' and 'goodbye', should return ['goodbye', 23]", function(){
    const actual = scoreWord("hello", "goodbye")
    const expected = ["goodbye", 23]
    expect(actual).toStrictEqual(expected);
    })

test("For inputs of 'hospital' and 'hotel', should return ['hospital', 25]", function(){
    const actual = scoreWord("hospital", "hotel")
    const expected = ["hospital", 25]
    expect(actual).toStrictEqual(expected);
     })


//check it works for variety of word inputs
//check it works for upper and lower case