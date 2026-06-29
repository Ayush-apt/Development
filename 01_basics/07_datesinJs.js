// Dates


// Section - 1

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())

console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

console.log(myDate.toTimeString())


// Section-2

let myCreatedDate = new Date(2026, 0, 21)
let myCreatedDate = new Date(2026, 0, 21, 5, 3)

let myCreatedDate = new Date("2026-01-21")
let myCreatedDate = new Date("01-21-2026")

console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(myTimeStamp)

console.log(Math.floor(Date.now()/1000))


// Section-3

let newDate = new Date();
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long",
})