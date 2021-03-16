const fs=require('fs')

fs.writeFile('abc.txt','hey how are you2?', function(err){
if(err)
    console.log(err)
})