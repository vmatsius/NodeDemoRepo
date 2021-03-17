var url=require('url')
var add="http://localhost:6000/index.html?year=2021"

var result=url.parse(add)

console.log(result.host)
console.log(result.pathname)
console.log(result.search)