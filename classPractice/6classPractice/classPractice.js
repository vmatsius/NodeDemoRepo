

// let a=90
// let a ="op" //error
// var b=90
// var b="opop" //will work
// const c="hi"
// v="hello" //error

// const printH=()=>({name:"gauri",add:"abc" })//returns object
// console.log(printH())

// const calcArea=(radius)=>Math.PI*radius*radius//returns area
// console.log(calcArea(4))

// const addTwo=(a,b)=>a+b
// console.log(addTwo(2,3))


var obj1={
    name:"gauri",
    age:70
}
//ES5
var age=obj1.age
var name=obj1.name 
//ES6
var{name,age}=obj1        //short-hand
console.log(age)
console.log(name)

var obj2={
    add:"Indid",
    zipcode:9090900
}
//ES5
var obj3=Object.assign(obj1,obj2)
//console.log(obj3)
//ES6
var obj3={...obj1, ...obj2}    //spread operator
//console.log(obj3)

var subjects=["Math","Chemistry"]
var score=90
//ES5
var student1={
    subjects:subjects,
    score:score
}
//ES6
var stu2={subjects, score}     //short-hand
//console.log(stu2)


//Template literal
console.log("the student stu2 scored "+stu2.score+" Marks") //ES5
console.log(`the student stu2 scored ${stu2.score} Marks`)  //ES6
//useful for example here: axios.get(`http://localhost:8900/users ${hjh}`)


//Set objects
var a=new Set() // ignores duplicates
a.add(1)
a.add(2)
a.add(1)
a.add("hi")
a.add("hi")
var y={name:"gauri"}
a.add(y)
console.log(a)


//Asyns/Await 
//new syntax for using promises - to directly wait for return value
//can use only if used inside a function which is async (es: async functionabs(){await anotherFunction...})


