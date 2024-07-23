/* import countries from "./countries.js"
import webTechs from "./web_techs.js"
 */
console.log("test")
//1
/* console.log(countries)
console.log(webTechs) */

// 2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
/* console.log(words)
console.log(words.length)
 */
text = text.replace(/[.,]/g,"")
console.log(text)
text=text.split(" ")
console.log(text.length)

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(!(shoppingCart[0]=="Meat")){
    shoppingCart.push("Meat")
    temp=shoppingCart[0]
    shoppingCart[0] = shoppingCart[shoppingCart.length-1]
    shoppingCart[shoppingCart.length-1] = temp
}
console.log(shoppingCart)

if(!(shoppingCart[shoppingCart.length-1]=="Sugar")){
    shoppingCart.push("Sugar")
}
console.log(shoppingCart)
console.log(shoppingCart.filter(item => item !== 'Honey'))

console.log(shoppingCart.map(item => item.replace('Tea','Green Tea')))

let flag=0
countries.forEach(element => {
    if(element=='Ethiopia'){
        flag=1
    }
});
if(flag==1){
    console.log('ETHIOPIA')
}else{
    countries.push('Ethiopia')
}

console.log(countries)

if(!(webTechs.find(item=>item=='Sass'))){
    webTechs.push('Sass')
    console.log(webTechs)
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullstack = frontEnd.concat(backEnd)
console.log(fullstack)



console.log(countries.slice(0,10))
