const fs=require('fs')

fs.rename('abc.txt','xyz.txt',function(err,data){
    if(err)
        console.error(err)
    else
        console.log('Renamed!!!')
})