// ASSESSMENT 2: Coding practical questions with Jest

const { TestWatcher } = require("jest")

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// var num1 = 15
// // Expected output: "15 is divisible by three"

// var num2 = 0
// // Expected output: "0 is divisible by three"

// var num3 = -7
// // Expected output: "-7 is not divisible by three"

// describe("are these numbers divisible by three", () => {
// var num1 = 15
// // Expected output: "15 is divisible by three"
// var num2 = 0
// // Expected output: "0 is divisible by three"
// var num3 = -7
// // Expected output: "-7 is not divisible by three"
//   it("returns is divisible or is not divisible based on input", () => {
//     expect(divisible(num1)).toEqual("15 is divisible by three")
//     expect(divisible(num2)).toEqual("0 is divisible by three")
//     expect(divisible(num3)).toEqual("-7 is not divisible by three")
//   })
// })
// // b) Create the function that makes the test pass.

// const divisible = (num) => {
//   if(num % 3 === 0){
//     return `${num} is divisible by three`
//   } else {
//     return `${num} is not divisible by three`
//   }
// }

/////////////////////////////////////// Todd's Pseudo Code /////////////////////////////////////////////////////
// Process I got up this morning and looked at it and had forgotten everything. 
// Luckily Sarah was on the line and answered a bunch of my questions and walked me through it step-by-step.
// See I thought you started with the function and then called the tests and it isn't like that.
// You need to write the test first then the function in order to get the first fail and then to get it to pass.
//So what me and Sarah first did was concentrate on writing the test.
//Once the test was written it was easier for me to figure out how to write the function in order to get a pass.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// describe("capitalize the frist letter all the words in this array", () => {
// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// it("returns the words in an array with the first letter capitalized based on input", () => {
//   expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//   expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//   })
// })
// // b) Create the function that makes the test pass.

// const capitalize = (array) => {
//   var newArray = []
//   for(let i=0; i<array.length; i++){
//     newArray.push(array[i].charAt().toUpperCase())
//     }
//    return newArray
//   }
/////////////////////////////////////// Todd's Pseudo Code /////////////////////////////////////////////////////
// This one has given me a super hard time right when I think I know how to do it it comes back around to slap me in the face
// I feel like a new baby trying to learn how to swim and I just keep sucking in water.
// I've bug Sarah so much that even with her excellent skills at teaching I still have no idea where I am
//I understand the next step is a join but I have no idea where it goes I know that right now
// The array is getting broken down and the two upper case is capitalizing every letter.
// I feel terrible that I was unable to complete this question but I've already wasted five hours on this.
// Already finished the other questions took a good night sleep and now I'm back this morning looking over my code.
// But the test is giving me a different output than it was yesterday I don't know where I went wrong but I still have an hour before class so I can try and figure it out.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// describe("fVowel will display the first vowel is the word", () => {
// var vowelTester1 = "learn"
//   // Expected output: 1
// var vowelTester2 = "academy"
//  // Expected output: 0
// var vowelTester3 = "challenge"
//  // Expected output: 2
// it("returns the first vowel in the word based on input", () => {
//   expect(fVowel(vowelTester1)).toEqual(1)
//   expect(fVowel(vowelTester2)).toEqual(0)
//   expect(fVowel(vowelTester3)).toEqual(2)
//   })
// })
// // b) Create the function that makes the test pass.

// const fVowel = (str) => {
//   for(let i=0; i<str.length; i++){
//   if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//     return str.indexOf(str[i])
//   }
//   }
// }

/////////////////////////////////////// Todd's Pseudo Code /////////////////////////////////////////////////////
// I have learned that if I don't stand up and take breaks I just keep getting more and more frustrated.
// I am so grateful that I have such wonderful instructors Sarah really took the time yesterday to walk me through this step-by-step.
// Even though I was getting frustrated and self doubting she guide me through it I can't say enough nice things about her.
// So the code is breaking down each of the strings looking at them for vowels and figuring out where the first valve in each of the streams are.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////