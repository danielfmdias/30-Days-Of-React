//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let c = 30
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let d = 40
    console.log(a, b, c, d) // Python 20 30
  }
  // we can not access d because d's scope is only the if block
  console.log(a, b,c) // JavaScript 10
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible