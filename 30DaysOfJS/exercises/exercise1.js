// 1
const emptyArr= Array()
// 2
const arrMoreThanFive= Array(6)
// 3
size = arrMoreThanFive.length
// 4
firstEl= size[0]
firstEl= size[(length/2)]
firstEl= size[(length-1)]
// 5
let mixedDataTypes = [1,"s",1.5,"st",4,5]
// 6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon","Tesla"]

// 7
console.log(itCompanies)
// 8
console.log(itCompanies.length)
size=itCompanies.length

// 9
const index = Math.floor(size / 2);
console.log(itCompanies[0])
console.log(itCompanies[index])
console.log(itCompanies[size-1])

// 10
console.log("printing each")
itCompanies.forEach(element => {
    element= element.toUpperCase()
    console.log(element)
});

// 11
function printArray(arr){
    
    if(arr.length==0) return 0;

    const lastElement= arr.pop();
    const sentence = arr.length > 0 ? `${arr.join(', ')} and ${lastElement}` : lastElement

    return `${sentence} are IT companies`;
}
console.log(printArray(itCompanies))
// 12
function checkCompany(arr,company){
    if(arr.find(element => element == company)){
        console.log(company+" was found")
    }else{
        console.log("not found")
    }
}
checkCompany(itCompanies,"Facebook")

// 14
function countOcc(str){
    return str.split('o').length-1;
}

companiesWithMoreThanOneO=[]

itCompanies.forEach(company => {
    if(countOcc(company.toLowerCase(), 'o') > 1){
        companiesWithMoreThanOneO.push(company)
    }
});
console.log(companiesWithMoreThanOneO)
// 15
itCompanies.sort()
console.log(itCompanies)
//console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log("itCompanies.slice(-3)")
//19s
console.log("print slice")
if(itCompanies.length %2 ==0){
    const middleIndex1 = Math.floor(itCompanies.length / 2) - 1;
    const middleIndex2 = Math.floor(itCompanies.length / 2);
    
    // Slice out the middle elements
    const middleCompanies = itCompanies.slice(middleIndex1, middleIndex2 + 1);
    
    console.log(middleCompanies);
}else{
    const middleIndex1 = Math.floor(itCompanies.length / 2);
    const middleCompanies = itCompanies.slice(middleIndex1,middleIndex1+1);
    console.log(middleCompanies);
}

// 20
//remove first
itCompanies.shift()
// 22
itCompanies.pop()
// 23
itCompanies.length=0
