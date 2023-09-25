// Day 1:
// Question 1


let a = []
let b = []
console.log(a==b)
console.log(a===b)
// Answere : False False


// Question 2
let c = []
let d = c;
console.log(c==d)
console.log(c===d)
// Answer: True True


// Question 3
let e = [20]
let f = [20]
console.log(e[0]==f[0]);
console.log(e[0]===f[0]);
// Answer : True True

// Question 4
let g = [1,2,3,4,5]
let h ={
    name : "ahtasham"
}

console.log(...g);
// Answer:1 2 3 4 5

// Question 5
console.log(typeof NaN)
// Answere: Not a Number

// Question 6:
let data = 50 - - 150;
console.log(data);
// Answere: 200

// Question 7:
const set = new Set([1,1,2,3,4]);
console.log(set)
// Answere: Set(4) {1, 2, 3, 4}

// Question 8
const myName = {
    name : "Ahtasham"
}
console.log(delete myName.name); 
// Answere: True

// Question 9
const myName1 = {
    name : "Ahtasham"
}
console.log(delete myName1); 
// Answere: False

// Question 10
const frnd = ["Ahtasham","Usama","Ali"]
const [y] = frnd;
console.log([y])

// Day 2