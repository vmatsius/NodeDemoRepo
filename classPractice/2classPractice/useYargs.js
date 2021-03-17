const yargs=require('yargs')

console.log(yargs.argv)
console.log(yargs.argv._)
console.log(yargs.argv._.splice(0,1)[0])
console.log(yargs.argv.filename)


//command and results:
// PS C:\Node\module2> node .\useYargs.js 9 7 ga --filename="abc.txt"
// { _: [ 9, 7, 'ga' ], filename: 'abc.txt', '$0': 'useYargs.js' }
// [ 9, 7, 'ga' ]
// abc.txt     