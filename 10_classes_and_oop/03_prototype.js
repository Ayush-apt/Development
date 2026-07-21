// let myName = "Ashu      "
// let myChannelName = "Ashu-apt"

// console.log(myName.trueLength)

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ashu = function(){
    console.log(`Ashu is present in all objects`)
}

Array.prototype.heyAshu = function(){
    console.log(`Ashu says Hello`)
}

// heroPower.ashu()
// myHeroes.ashu()
// myHeroes.heyAshu()
// heroPower.heyAshu()


// inheritance

const user = {
    name: "Ashu",
    email: "Ashu@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern Syntax 

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "Ashu-apt     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"AshuIceCream".trueLength()
"iceTea".trueLength()