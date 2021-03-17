const fs=require('fs')
var b= new Buffer(1024)

fs.open('abc.txt','r',function(err, fileData){
    if(err)
        console.log(err)
    else   
        //read operation
        
        fs.read(fileData, b, 0, 0, function(err,bytes){
            console.log(b.slice(0, bytes).toString())
        })

})

//throws error if file does not exist