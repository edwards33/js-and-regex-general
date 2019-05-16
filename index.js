
var text = `Is this true or it is not true`

var regex01 = new RegExp('is')

var regex02 = /is/g //new RegExp('is', 'g')

var regex03 = /is/gi

console.log(regex01.test(text))

console.log(regex01.exec(text))

console.log(`1: ${regex02.exec(text).index}`)
console.log(`2: ${regex02.exec(text).index}`)
if(regex02.exec(text))
  console.log(`3: ${regex02.exec(text).index}`)

console.log(`1 with gi: ${regex03.exec(text).index}`)

console.log(text.match(regex03))
