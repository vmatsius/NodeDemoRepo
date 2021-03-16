var employee={
    name:"gauree",
    designation:"Trainer",
    company:"Edureka",
    Batches:["tcs", "xyz",""],
    address:{
        city:"abc",
        country:"India",
        zipcode:78955433
    }
}

console.log(employee)

let emplString=JSON.stringify(employee)
console.log(emplString)

let emp=JSON.parse(emplString)
console.log(emp)
