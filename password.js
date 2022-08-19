//Create a program to check the password.
//Must be at least 10 characters.
//Must contain at least 1 letter and 1 number.
//If passing, logs success, if failing, logs error.
//Test conditionals with changes made to the password.

let password = 'finalfanTasy7'
let passwordlength = false
let upperCase = false
let hasNum = false
let passwordcap = false


for (let i=0; i<password.length; i++){
if(password[i] === password[i].toUpperCase()){
upperCase = true}
if(typeof +password[i] === 'number'){
    hasNum = true
}
}
if(password.length > 9){
passwordlength = true
}
if(password.length < 21){
passwordmax = true
}
if(passwordmax === true && hasNum === true && passwordlength === true && upperCase === true) {
    console.log('You did it!')
} else {
    console.log('Not quite.')
}
console.log
(`_______ _________ _        _______  _          _______  _______  _       _________ _______  _______             ______  
(  ____ \\__   __/( (    /|(  ___  )( \        (  ____ \(  ___  )( (    /|\__   __/(  ___  )(  ____ \|\     /|  / ___  \ 
| (    \/   ) (   |  \  ( || (   ) || (        | (    \/| (   ) ||  \  ( |   ) (   | (   ) || (    \/( \   / )  \/   )  )
| (__       | |   |   \ | || (___) || |        | (__    | (___) ||   \ | |   | |   | (___) || (_____  \ (_) /       /  / 
|  __)      | |   | (\ \) ||  ___  || |        |  __)   |  ___  || (\ \) |   | |   |  ___  |(_____  )  \   /       /  /  
| (         | |   | | \   || (   ) || |        | (      | (   ) || | \   |   | |   | (   ) |      ) |   ) (       /  /   
| )      ___) (___| )  \  || )   ( || (____/\  | )      | )   ( || )  \  |   | |   | )   ( |/\____) |   | |      /  /    
|/       \_______/|/    )_)|/     \|(_______/  |/       |/     \||/    )_)   )_(   |/     \|\_______)   \_/      \_/     
                                                                                                                         `);