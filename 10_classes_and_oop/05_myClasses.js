// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const ashu = new User("ashu", "ashu@google.com", "123@")

// console.log(ashu.encryptPassword()); 
// console.log(ashu.changeUsername());

// behind the scene 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const arya = new User("arya", "arya@google.com", "123@")

console.log(arya.encryptPassword()); 
console.log(arya.changeUsername());
