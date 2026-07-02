// var c = 30 
let a = 300

if (true){
    let a = 10
    const b = 20
    // console.log("Inner :", a)
}

// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "Ayush" 

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true){
    const username = "Ayush"
    if(username === "Ayush"){
        const website = " YouTube"
        // console.log(username + website)
    }
}


// _________________________________________


addone(5)

function addone(num){
    return num + 1
}

addtwo(5) // Error bcs if we declare function like this we cant call it above const declaration

const addtwo = function(num){
    return num + 2;
}

