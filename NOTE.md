# JavaScript Regular Expression 
## Example One
```Javascript
//simple sentence for testing
const sentence = 'The Quick Brown Fox Jump Over The Lazy Dog';

//using test method to search for a word in the provided sentence either it exist or not.
let example1 = /Dog/  //--> True
// let example1 = /dog/  //--> False
let result = example1.test(sentence)
console.log(result)

let example1_01 = new RegExp('Dog').test(sentence)
console.log(example1_01)
/*
The test methos is case senesitive and its return a boolean value as a result.
Example1 and Example2 both are work the same.But i think you notice that using  the new keyword
we reduce code lines,the same thing we get with two lines in the example one using the new keyword we just done in one line.
*/
```
## Example Two 
```javascript
//Looking for multiples values to check whether its exist or not using test method(|OR)
let example2 = new RegExp('dog|Fox|jump').test(sentence)
console.log(example2)

let example2_02 = /dog|Fox|jump/
let result2 = example2_02.test(sentence)
console.log(result2)
```
## Example Three
```javascript
// let example3 = new RegExp('jump').test(sentence) //--> false
let example3 = new RegExp('jump','i').test(sentence) //--> True
console.log(example3)

/* 
Because we are using the ( i flag) ignore the case-sensitiveness.
*/
let example3_03 = /jump/i;
let result3 = example3_03.test(sentence)
console.log(result3)
//Multiple words matching with test method( i flag ) 
let example3_03_3 = new RegExp('jump|over|the','i').test(sentence)
console.log(example3_03_3)
```
## Example Four
```javascript
/*
The Match Method --> Is used to grab the value which we are looking inside the string provided.It will give us the word not like test method they just give us the true and false value either if it exist or not.the match method return the result as an array.
*/
let example4 = new RegExp('lazy','i')
let result4 = sentence.match(example4)
console.log(result4)

let example4_04 = /lazy/i;
let result_04 = sentence.match(example4_04)
console.log(result_04)
console.log(result_04[0]) // Access the word through index

OutPut:>>
[
  'Lazy',
  index: 34,
  input: 'The Quick Brown Fox Jump Over The Lazy Dog',
  groups: undefined
]

//if the pattern found it will return an array with the matched pattern ,but if doesn't match it return null.
```
## Example Five
```javascript
let example5 = new RegExp('the','ig')
let result5 = sentence.match(example5)
console.log(result5)
/*
Using the ( g flag ) we basically get all the matched pattern and we dont care about that how many times its used inside the string.Means if the matched words occure two or more times it will give you in the result.
*/
OutPut:>>
['The','the'] //Because the (The) used twice in the sentence.

let example5 = new RegExp('dog','ig')
let result5 = sentence.match(example5)
console.log(result5)
console.log(result5[0])


OutPut:>>
['Dog'] //Because the (dog) used once in the sentence.
```
## Example Six
```javascript
let example6 = new RegExp('.o.','ig')
let result6 = sentence.match(example6)
console.log(result6)
/*
Macthing pattern using match method with (wilcard .(dot) and i,g flags).
A short summary of the wild card dot.what basically the wild card dot do.
Dot dont care whatever the letter in the begging and at the end of pattern,grab all the words that they have o at mid.
*/
OutPut:>>
[ 'row', 'Fox', ' Ov', 'Dog' ] 
//Actually the exact words are the following
['Brown','Fox','Over','Dog']
/*
We need just three letter--> first-letter(.).second-letter(O),last-letter(.)
*/

//NOTE: If you dont used the ( g flag ) it will give you only the first match -->['row'],because the g flag is used to grab all the occurencess.
let example6 = new RegExp('.o.','i')
let result6 = sentence.match(example6)
console.log(result6)

OutPut:>>
[
  'row',
  index: 11,
  input: 'The Quick Brown Fox Jump Over the Lazy Dog',
  groups: undefined
]

//If you want to print complete word just used ..before and after..
let example6 = new RegExp('..o..','i')
let result6 = sentence.match(example6)
console.log(result6)

OutPut:>>
[
  'Brown',
  index: 11,
  input: 'The Quick Brown Fox Jump Over the Lazy Dog',
  groups: undefined
]

```
## Example Seven
```javascript
let example7 = new RegExp('.','ig')
let result7 = sentence.match(example7)
console.log(result7)
//Using only the dot wild card with Match method.
OutPut:>>
[
  'T', 'h', 'e', ' ', 'Q', 'u', 'i',
  'c', 'k', ' ', 'B', 'r', 'o', 'w',
  'n', ' ', 'F', 'o', 'x', ' ', 'J',
  'u', 'm', 'p', ' ', 'O', 'v', 'e',
  'r', ' ', 't', 'h', 'e', ' ', 'L',
  'a', 'z', 'y', ' ', 'D', 'o', 'g'
]
```
## Example Eight
```javascript
//Looking for specific pattern oor range of pattern using Match method with brackets []
//In here we are looking for that how many b,d,h each letter present or exist in the string.
let example8 = new RegExp('[bdh]','ig')
let result8 = sentence.match(example8)
console.log(result8)

//In here we are looking for a range of pattern from a to f(a-f)
let example8 = new RegExp('[a-f]','ig')
let result8 = sentence.match(example8)
console.log(result8)

OutPut:>>
[
  'e', 'c', 'B',
  'F', 'e', 'e',
  'a', 'D'      
]
```