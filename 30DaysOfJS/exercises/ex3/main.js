const ages = [19, 18,22, 19, 24, 20, 25, 26, 24, 25, 24]
let ages_arr=ages
ages_arr=ages_arr.sort()
console.log(ages_arr)
min_age=ages_arr.shift()
max_age=ages_arr.pop()
console.log("min_age: "+min_age+" - max_age: "+max_age)

if(ages.length % 2 ==0){
    mid1=ages[ages.length/2]
    mid2=ages[ages.length/2]-1
    console.log("mid: "+Math.floor((mid1+mid2)/2))
}else{
    console.log("mid: "+ages[Math.floor((ages.length/2))])
}

sum=0
ages.forEach(element => {
    sum+=element
});
average_age=sum/ages.length
console.log(Math.floor(average_age))

range_ages=max_age-min_age
console.log("range_ages :"+(max_age-min_age))

console.log(Math.floor(Math.abs(min_age-average_age)))
console.log(Math.floor(Math.abs(max_age-average_age)))


