class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ashu`
    }

    set password(value){
        this._password = value
    }
}

const ashu = new User("a@ashu.ai", "abc")
console.log(ashu.email)