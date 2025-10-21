function fullName(first:string, last:string):string {
  return first + " " + last;
}
console.log(fullName("Faarax", "Cabdulaahi"));


function registerUser(username:string, isAdmin?:boolean, language:string="en"){
    console.log(`my username is: ${username} and iam admin is ${isAdmin} and my language is ${language}`)
}

registerUser("Faarax", true, "somali")

function average(...numbers:number[]):number {
    return numbers.reduce((a,b)=> a + b, 0)
}
console.log(average(3,5))