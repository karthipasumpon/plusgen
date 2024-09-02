// Type Conversion

// implicit type conversion
    // automatically converted from one data type to another data type

// explicit type conversion
    // Manually converted



// 1. string
/*
let a;

a = '3' + 8;
console.log(a)  // 38
console.log(typeof a)

a = '3' + false
console.log(a)
console.log(typeof a)

a = '3' + null;
console.log(a)
console.log(typeof a)

a = '3' + undefined
console.log(a)
console.log(typeof a)
*/
// 2. number
/*
let b;
b = '4' - 2;
console.log(b)
console.log(typeof b)

b = '4' - true
console.log(b)
console.log(typeof b)

b = '4' - null
console.log(b)
console.log(typeof b)

b = '4' - undefined
console.log(b)
console.log(typeof b)
*/

// 3. Non numeric string result 
/*
let c ;

c = 'Test' - 'dtesd'
console.log(c)
console.log(typeof c)  

c = 'test' - 4
console.log(c)
*/
// 4. implicit conversion Boolean

// let d;
// d = '4' - true
// console.log(d)
// console.log(typeof d)

// d = 4 - true
// console.log(d)
// console.log(typeof d)

// d = '4' - false
// console.log(d)
// console.log(typeof d)

// d= 4 + false
// console.log(d)
// console.log(typeof d)

// const person = {
//     name: 'Nathan',
//     skills: ['HTML', 'CSS', 'JavaScript'],
  
//     showSkills: () => {
//       this.skills.forEach(skill => {
//         console.log(`${this.name} is skilled in ${skill}`);
//       });
//     },
//   };
  
//   const person = {
//     name: 'Nathan',
//     skills: ['HTML', 'CSS', 'JavaScript'],
  
//     showSkills() {
//       this.skills.forEach(skill => {
//         console.log(`${this.name} is skilled in ${skill}`);
//       });
//     },
//   };
  
//   person.showSkills();

//   person.showSkills();


const person = {
    title: "Courses",
    skills : ["HTML", "CSS", "JS"],
    showSkills () {
        this.skills.map( function (value)  {
            console.log( `title is ${this.title} and value ${value}` )
        })
    }    
}

person.showSkills()