# JavaScript Regular Expression 
## Example 1
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
## Example 2
```javascript
//Looking for multiples values to check whether its exist or not using test method(|OR)
let example2 = new RegExp('dog|Fox|jump').test(sentence)
console.log(example2)

let example2_02 = /dog|Fox|jump/
let result2 = example2_02.test(sentence)
console.log(result2)
```
## Example 3
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
## Example 4
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

OUTPUT:>>
[
  'Lazy',
  index: 34,
  input: 'The Quick Brown Fox Jump Over The Lazy Dog',
  groups: undefined
]

//if the pattern found it will return an array with the matched pattern ,but if doesn't match it return null.
```
## Example 5
```javascript
let example5 = new RegExp('the','ig')
let result5 = sentence.match(example5)
console.log(result5)
/*
Using the ( g flag ) we basically get all the matched pattern and we dont care about that how many times its used inside the string.Means if the matched words occure two or more times it will give you in the result.
*/
OUTPUT:>>
['The','the'] //Because the (The) used twice in the sentence.

let example5 = new RegExp('dog','ig')
let result5 = sentence.match(example5)
console.log(result5)
console.log(result5[0])


OUTPUT:>>
['Dog'] //Because the (dog) used once in the sentence.
```
## Example 6
```javascript
let example6 = new RegExp('.o.','ig')
let result6 = sentence.match(example6)
console.log(result6)
/*
Macthing pattern using match method with (wilcard .(dot) and i,g flags).
A short summary of the wild card dot.what basically the wild card dot do.
Dot dont care whatever the letter in the begging and at the end of pattern,grab all the words that they have o at mid.
*/
OUTPUT:>>
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

OUTPUT:>>
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

OUTPUT:>>
[
  'Brown',
  index: 11,
  input: 'The Quick Brown Fox Jump Over the Lazy Dog',
  groups: undefined
]

```
## Example 7
```javascript
let example7 = new RegExp('.','ig')
let result7 = sentence.match(example7)
console.log(result7)
//Using only the dot wild card with Match method.
OUTPUT:>>
[
  'T', 'h', 'e', ' ', 'Q', 'u', 'i',
  'c', 'k', ' ', 'B', 'r', 'o', 'w',
  'n', ' ', 'F', 'o', 'x', ' ', 'J',
  'u', 'm', 'p', ' ', 'O', 'v', 'e',
  'r', ' ', 't', 'h', 'e', ' ', 'L',
  'a', 'z', 'y', ' ', 'D', 'o', 'g'
]
```
## Example 8
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

OUTPUT:>>
[
  'e', 'c', 'B',
  'F', 'e', 'e',
  'a', 'D'      
]
```
## Example 9
```javascript
let example9 = new RegExp('[1-3x-z]','ig')
let result9 = sentence.match(example9)
console.log(result9)
//Match number and alphabets range using Match method with []
```
## Example 10
```javascript
//The caret symbol (^) is used to ignore wwhat we are looking for.inside the bracket.
let exapmle10 = new RegExp('[^1-3a-k ]','ig')
let result10 = sentence.match(exapmle10)
console.log(result10)

OUTPUT:>>
[
  'T', 'Q', 'u', 'r', 'o',
  'w', 'n', 'o', 'x', 'u',
  'm', 'p', 'O', 'v', 'r',
  't', 'L', 'z', 'y', 'o',
  '0', '4', '5', '0'      
]
//In this case get everything except what we have provided inside the brackets.
```
## Example 11
```javascript
let example11 = new RegExp('l+','ig')
const result11 = sentence.match(example11)
console.log(result11)
//The + sign used to get a letter that how many times its used in a word inside the string.
//In here the L used three times onde at (lazy,really).Basically the + sign used wheather a letter repeated if does grab them.
OUTPUT:>>
[ 'L', 'll' ]
```
## Example 12
```javascript
let sentence2 = 'Gooooooooooooogle' //Just for testing purpose
let example12 = new RegExp('go*','i') // Just o not the letters after the last o.
let result12 = sentence2.match(example12)
console.log(result12)
//The * Astrix used to looking for zero or more time occurnce of a letter in string.
//Go* --> Means whatever we dont know that how many times the o comes after the first o in the string , we just want that if they occurence is 0 or more time.
```
## Example 13
```javascript
//The lazy matching with Match method ( ? lazy matching)
let example13 = new RegExp('T.*?')
let result13 = sentence.match(example13)
console.log(result13)
```
## Example 14
```javascript
let example14 = new RegExp('^the','i')
let result14 = sentence.match(example14)
console.log(result14)
// Dont be confused with ^ caret symbol.Outside in the bracket [] its means to get the beggening of the string or the first letter of the string.
```
## Example 15
```javascript
//Looking for the ending/last letter pattern in the string.
let example14 = new RegExp('10$','i')//$ symbol is used to match the last letter of the string.
let result14 = sentence.match(example14)
console.log(result14)

```
## Example 16
```javascript
let exapmle15 = /\w/g; // it must check that the w is lowercase ,if doesn't it will not work.
let result15 = sentence.match(exapmle15)
console.log(result15)
//The lowercase (\w) matches all the numbers 0-9,alphabats a-z and underscore _
OUTPUT:>>
[
  'T', 'h', 'e', 'Q', 'u', 'i', 'c', 'k',
  'B', 'r', 'o', 'w', 'n', 'F', 'o', 'x',
  'J', 'u', 'm', 'p', 'O', 'v', 'e', 'r',
  't', 'h', 'e', 'L', 'a', 'z', 'y', 'D',
  'o', 'g', 'r', 'e', 'a', 'l', 'l', 'y',
  '1', '2', '3', '0', '4', '5', '3', '1',
  '1', '0', '_'
]
```
## Example 17
```javascript
let example16 = new RegExp('\\W','g') //it must be capital W
// let example16 = /\W/g;
let result16 = sentence.match(example16)
console.log(result16)
//THe Capital \W is used to get all the non-character.Like not 0-9,a-z and underscore _ 
```
## Example 18
```javascript
//Matching all the numbers only using lowerCase d
let example17 = new RegExp('\\d','g')
let result17 = sentence.match(example17)
console.log(result17)

//Matching all non-numbers using UpperCase D
let example17 = new RegExp('\\D','g')
let result17 = sentence.match(example17)
console.log(result17)
```
## Example 19
```javascript
let example18 = new RegExp('\\s','g') //it mnust be lower case s with backslash.
let result18 = sentence.match(example18)
console.log(result18)
//get all the whitespaces in the string.
```
## Example 20
```javascript
let example18 = new RegExp('\\S','g') //it mnust be Upper case s with backslash.
let result18 = sentence.match(example18)
console.log(result18)
//get all the matched pattern except whitespaces.
```
## Example 21
```javascript
// let example19 = new RegExp('o{10,15}').test(sentence) //false
let example19 = new RegExp('o{5,15}').test(sentence) //true
console.log(example19)

let example19 = new RegExp('o{5}').test(sentence) //true
console.log(example19)

//check a pattern used min time and max time.same like provide a range.
//{} its quantity specifier --> {5 min,15 max}

//Get the matched values using Match method.
let example19_9 = new RegExp('o{5,8}','g')
let result19_9 = sentence.match(example19_9)
console.log(result19_9)

OUTPUT:>>
[ 'oooooo' ]

let example19_9 = new RegExp('o{5}')
let result19_9 = sentence.match(example19_9)
console.log(result19_9)
```
## Example 22
```javascript
const colour = 'colour'
const color = 'color'
let example20 = new RegExp('colou?r').test(colour) //true
// let example20 = new RegExp('colou?r').test(color) //true
console.log(example20)
//The ( u ) is optional.
```
## Example 23
```javascript
//Positive Lookahead
let example21 = new RegExp('j(?=u)','i').test(sentence) //true
console.log(example21)
//(?=u) its a condition checking that if the u come after j it will return true.

//Negative Lookaheadlet example21 = new RegExp('j(?=u)','i').test(sentence)
let example21 = new RegExp('j(?!u)','i').test(sentence) //false
console.log(example21)

let example21 = new RegExp('j(?!m)','i').test(sentence) //true
console.log(example21)

```
