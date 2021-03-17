const fs=require('fs')

fs.stat('xyz.txt',function(err,stat){
    if(err)
        console.error(err)
    else   
    {
        console.log(stat)
        console.log("wether this is a file", stat.isFile())
        console.log("wether this is a dir", stat.isDirectory())
    }
})