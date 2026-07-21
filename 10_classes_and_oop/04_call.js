function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const ashu = new createUser("Ashu", "ashu@google.com", "@123")
console.log(ashu)