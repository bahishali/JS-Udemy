//Difference Null and Undefined

let age;
console.log(age,age+5,`Yas: ${age}`);
//age undefined herhangi bir atama yok
//age+5 NaN 
//`Yas: ${age}` > `Yas: undefined`

let age2=null;
console.log(age2,age2+5,`Yas: ${age2}`);
//age null , null bir değerdir boş =null dersek null ataması yapmış oluruz
//age+5 = 5
//`Yas: ${age}` > `Yas: null`