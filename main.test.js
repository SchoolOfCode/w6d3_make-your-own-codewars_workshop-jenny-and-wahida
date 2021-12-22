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

//Check format of array

test("For words of the same length, the response should be an array with two elements, the first a string, the second a number", function(){
const actual = scoreWord("wordOne", "wordTwo")
const expected = [expect.any(String), expect.any(Number)]
expect(actual).toStrictEqual(expected);
})

//Checks words of different lengths

test("For words of different lengths, the response should be the phrase 'It's not a fair fight!'", function() {
    const actual = scoreWord("wordOne", "word")
    const expected = "It's not a fair fight!"
    expect(actual).toBe(expected)
})

//Checks words only have letter characters

test("For inputs that includes non-letter characters, the response should the phrase 'This is an alien language'", function() {
    const actual = scoreWord("192-", "%$%h")
    const expected = "This is an alien language"
    expect(actual).toStrictEqual(expected)
})

//check it works for variety of word inputs

test("For inputs of 'hello' and 'posts', should return ['hello', 16]", function(){
    const actual = scoreWord("hello", "posts")
    const expected = ["hello", 16]
    expect(actual).toStrictEqual(expected);
    })

test("For inputs of 'hospital' and 'dopamine', should return ['dopamine', 28]", function(){
    const actual = scoreWord("hospital", "dopamine")
    const expected = ["dopamine", 28]
    expect(actual).toStrictEqual(expected);
     })
  
//check it works for ties 

test("For inputs of 'apple' and 'toast', should return ['tie', 16]", function(){
    const actual = scoreWord("apple", "toast")
    const expected = ["tie", 16]
    expect(actual).toStrictEqual(expected);
         })


//check it works for upper and lower case

test("For inputs of 'APPLE' and 'toast', should return ['tie', 16]", function(){
    const actual = scoreWord("APPLE", "toast")
    const expected = ["tie", 16]
    expect(actual).toStrictEqual(expected);
         })

test("For inputs of 'ALIENS' and 'SECRET', should return ['ALIENS', 21]", function(){
    const actual = scoreWord("ALIENS", "SECRET")
    const expected = ["ALIENS", 21]
    expect(actual).toStrictEqual(expected);
                 })
