var p = new Promise( function(resolve,reject){
    //perform a task
    const a="Node"
    const b="Node"

    if(a==b) //if passes
        resolve()
    else //if fails
        reject()

})

p
    .then( (value)=>{   // has to be executed
        console.log("it is getting executed ", value)
        return 1
    }) 
    .then(()=>{
        console.log(".then resolved another promise")
    })
    .catch(()=>{
        console.error("error")
    })