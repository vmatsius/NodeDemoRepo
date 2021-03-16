const fs=require('fs')
const yargs=require('yargs')

/*
1. take the filename
2. get array from filename.txt file
3.save the array and check if the filename exists in that array
if yes
  throw error
else
  add this new filename to that array and save it
  +
  create this new file and write "you are awesome"
*/

let filename=yargs.argv.filename
console.log('filename: ',filename)
let fileArray=[]

fs.readFile('filenameArr.txt', function(err, data){
    if(err)
        console.error(err)
    else
        console.log('data: ', data);
        //logic to get data and put it into array
        fileArray=data.toString() //something like this
        console.log('fileArray: ', fileArray)
        if(fileArray.includes(filename)){
            return console.error('error: name exists: ', filename)
        }else{
          fs.writeFile(filename,'You are awesome3',function(err,data){})
          fs.appendFile('filenameArr.txt', '\n'+ filename,function(err,data){})

        }
            

})

 
//const fs= require('fs')const yargs =require('yargs')let filename= yargs.argv.filenamelet fileArray =[]/*take the filename from cmd line get array from filenames.txt  file save the array and chcek whether the filename exists in that array or not if yes  throw error else you add new file name to that array and save it  + create this new file and write your are awesome */fs.readFile('filnames.txt',function(err,data){   if (err)    return console.error(err)   else   fileArray=data.toString()   if (fileArray.includes(filename))    return console.error()   else     fs.writeFile(filename,'You are aWesome',function(err,data){              })      })
