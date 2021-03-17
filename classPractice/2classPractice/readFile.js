const fs=require('fs')

fs.readFile('abc.txt',function(err,data){
    if(err)
        console.error('error in reading file: ')
    else if(data)
        console.log(data.toString())
})