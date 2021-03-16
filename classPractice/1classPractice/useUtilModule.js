var util = require('util')

txt="Congratulate %s on his %dth birthday!"
let result=util.format(txt, 'Gauri', 10)
console.log(result)