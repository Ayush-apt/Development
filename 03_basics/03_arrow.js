const user = {
    username: "Ayush",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Ayush"
//     console.log(this.username)
// }

// chai()

// const chai = function () {
//     let username = "Ayush"
//     console.log(this.username)
// }


const chai = () => {
    let username = "Ayush"
    console.log(this)
}

// chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// const addtwo = (num1,num2) => num1 + num2

// const addtwo = (num1,num2) => (num1 + num2)

const addtwo = (num1,num2) => ({username : "Ayush"})


console.log(addtwo(3,4))

