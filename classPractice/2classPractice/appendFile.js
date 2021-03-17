const fs=require('fs')

fs.appendFile('xyz.txt','\n second line',function(err,data){
    if(err)
        console.error(err)
    else
        console.log('Appended!!')
})