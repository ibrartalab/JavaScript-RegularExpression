//simple sentence for testing
const sentence = 'The Quick Brown Fox Jump Over the Lazy Dog really 1 2 30 45 31 10 _ @ %% & *';


// let example1 = /Dog/  //--> True
// // let example1 = /dog/  //--> False
// let result = example1.test(sentence)
// console.log(result)

// let example1_01 = new RegExp('Dog').test(sentence)
// console.log(example1_01)
//-------------------------------------------------

// let example2 = new RegExp('dog|Fox|jump').test(sentence)
// console.log(example2)

// let example2_02 = /dog|Fox|jump/
// let result2 = example2_02.test(sentence)
// console.log(result2)

//------------------------------------------------

// let example3 = new RegExp('jump').test(sentence) //--> false
// let example3 = new RegExp('jump','i').test(sentence) //--> True
// console.log(example3)

// let example3_03 = /jump/i;
// let result3 = example3_03.test(sentence)
// console.log(result3)

// let example3_03_3 = new RegExp('jump|over|the','i').test(sentence)
// console.log(example3_03_3)
//-----------------------------------------------
// let example4 = new RegExp('lazy','i')
// let result4 = sentence.match(example4)
// console.log(result4)

// let example4_04 = /lazy/i;
// let result_04 = sentence.match(example4_04)
// console.log(result_04)
// console.log(result_04[0])
//----------------------------------------------
// let example5 = new RegExp('the','ig')
// let result5 = sentence.match(example5)
// console.log(result5)

// let example5 = new RegExp('dog','ig')
// let result5 = sentence.match(example5)
// console.log(result5)
// console.log(result5[0])
//---------------------------------------------
// let example6 = new RegExp('.o.','ig')
// let result6 = sentence.match(example6)
// console.log(result6)

// let example6 = new RegExp('.o.','i')
// let result6 = sentence.match(example6)
// console.log(result6)
//-----------------------------------------------
// let example7 = new RegExp('.','ig')
// let result7 = sentence.match(example7)
// console.log(result7)
//------------------------------------------------
// let example8 = new RegExp('[bdh]','ig')
// let result8 = sentence.match(example8)
// console.log(result8)

// let example8 = new RegExp('[a-f]','ig')
// let result8 = sentence.match(example8)
// console.log(result8)
//--------------------------------------------------
// let example9 = new RegExp('[1-3x-z]','ig')
// let result9 = sentence.match(example9)
// console.log(result9)
//-------------------------------------------------
// let exapmle10 = new RegExp('[^1-3a-k ]','ig')
// let result10 = sentence.match(exapmle10)
// console.log(result10)
//---------------------------------------------
// let example11 = new RegExp('l+','ig')
// const result11 = sentence.match(example11)
// console.log(result11)
//-----------------------------------------
// let sentence2 = 'Gooooooooooooogle' //Just for testing purpose
// let example12 = new RegExp('go*','i')
// let result12 = sentence2.match(example12)
// console.log(result12)
//----------------------------------------------
// let example13 = new RegExp('T.*?')
// let result13 = sentence.match(example13)
// console.log(result13)
//-----------------------------------------------
// let example14 = new RegExp('^the','i')
// let result14 = sentence.match(example14)
// console.log(result14)
//------------------------------------------------
// let example14 = new RegExp('10$','i')
// let result14 = sentence.match(example14)
// console.log(result14)
//-------------------------------------------------
// let exapmle15 = /\w/g; // it must check that the w is lowercase ,if doesn't it will not work.
// let result15 = sentence.match(exapmle15)
// console.log(result15)
//----------------------------------------------
