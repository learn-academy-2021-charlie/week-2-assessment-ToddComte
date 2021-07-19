// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer: To me it breaks down Charlie 2021 down into a new array of strings and returns that array. 
// So it would look like 'c' 'h' 'a' 'r' 'l' 'i' 'e' '2' '0' '2' '1'

// b) Verify and explain: So once I ran the code I saw that I was correct and it made me super excited.
// This whole week I feel like my brain has been numb there's been several times that you guys have taught some thing 
// and I got into the challenges with my partner and it was like I can't think straight


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: In my opinion this will console log undefined. Because you forgot your return in the function 
// And therefore the hello name is undefined and will be console log as such.

// b) Verify and explain: Man I am feeling like I'm on fire second one in a row that I was right. 
// Hopefully I can keep this up through the whole coding concepts.
// It really boost my confidence because I took my time and read through and saw that there was no return. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: When I saw this question I kind of chuckled to myself because I knew immediately that it was a high order function. 
// Thanks to Sarah whiteboarding me and asking me about high order functions and me not knowing the answer I went back through and studied it more.
// The answer will be the array multiplied by two and will look like 8, 10, 12, 14, 16.

// b) Verify and explain: Yes thank you Sarah for making me go back and look at my higher order functions.
// I'm so glad that I understand this concept.

// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: This will only display the evens within the array once again this is a high order function. 
// Which means that it takes in a function as an argument. Thanks to you and Sarah as the instructors of our cohort I know that.
// So it will console log 12 and 14 because everything else is odd in this array.

// b) Verify and explain: I was right again I really am on fire. So the .filter as a high order function it
// loops through and only displays all the values in the array that are true.


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
// console.log(learnStudent)

// a) Your answer: This one made me think for a bit I read through it I knew that it would console log
// At least George Charlie and 2021 and I'm not what eles it will console log.
// So I thought of what you and Sarah would say. You would tell me to read through everything thoroughly
// And to break it down to a simpler form that I do understand. So with that said I think that it would look like
// This in the terminal learn {student "George", cohort "Charlie", year 2021}

// b) Verify and explain: Well it looks like this Learn { student: 'George', cohort: 'Charlie', year: 2021 }
// So when you compare it to what I thought it was going to look like there's not that much difference 
// between the two of them except for my quotations and colons so I asked Sarah if I forgot something.
// And she explained not to worry about the quotations and the reason the colon is there is because of inheritance of a class.
