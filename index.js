console.log("%c my name is hamna","color:orange; font-size:35px")

let alpha=['b','a','d','c']
console.log(alpha.sort())

let emptyArray = new Array();
for(let num=1; num<100; num+=2){
    emptyArray.push(num)
}
console.log(emptyArray)

//object in js
let student= {
    "firstname":"Hamna",
    "favsport":"cricket",
    "food":"burger",
    studentInfo: function(){
        return this.firstname + '/n' + this.favsport + '/n';
    }

}
// console.log(student.food)
// console.log(student.firstname)
// console.log(student.favsport)
console.log(student.studentInfo())