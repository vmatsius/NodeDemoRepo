//import <ntpath> from 'path';

var path=require('path');

var p="C:\Node\module1\demo\app.txt";

console.log(path.dirname(p));

console.log(path.basename(p));

console.log(path.extname(p));

console.log(path.isAbsolute(p));