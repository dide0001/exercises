const fullName = "Hans Peter Richard"
const start = fullName.indexOf(" ");
const end = fullName.lastIndexOf(" ")

const firstName = fullName.substring(0, start)
console.log(firstName)

const middleName = fullName.substring(start+1, end)
console.log(middleName)

const lastName = fullName.substring(end+1)
console.log(lastName)


// const firstName = fullName.substring(0,3)
// const middleName = fullName.substring(5,10)
// const lastName = fullName.substring(11)
// console.log(`Personens mellemnavn navn er ${middleName}`)
// console.log(`Personens efternavn navn er ${lastName}`)
// console.log(`Personens fulde navn er ${fullName}`)
