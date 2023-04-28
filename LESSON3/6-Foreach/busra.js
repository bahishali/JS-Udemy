//call back functions

// const a = (callBacka)=>{
//     let age=40;
//     callBacka(age);
// };

// a(function(value){
//     console.log(value);
// })

//Foreach
//arraydeki eleman sayısı kadar döngüyü dönderdi
let students=["busra","batu","gokce","goktug"];

students.forEach(function(){
    console.log('Hello')
})

//parametre tanımlarsak person a denk gelen her bir array item ını dönderir
students.forEach(function(person){
    console.log(person)
})

//index i de 
students.forEach(function(person,index){
    console.log(person,index)
})

const student =(person,index)=>{
    console.log(`${index} - ${person}`)
}

students.forEach(student);