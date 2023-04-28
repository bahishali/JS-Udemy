// let age=28;
// console.log(age==28);
// //arkada JS tipini değiştiriyor string ile number karşılaştırması yapabilriiz
// //== 2 tane eşittir de JS arkada tipini çeviriyor
// console.log(age=='28');

// console.log(age!=28);
// console.log(age!='28');

// //tipiyle de karşılaştırma yapmak istersek === 3 tane eşittir kullanmamız gerekiyor.
// console.log(age==28);
// console.log(age==='28');

// console.log(age!==28);
// console.log(age!=='28');


let age='28';
console.log(age+1);
console.log(typeof age) //string

//JS type conversion (called casting in C#)

//string to number
age = Number(age)
console.log(age+1);
console.log(typeof age)

let result=Number('Can');
console.log(result); //NaN 

//number to string
let result2=String(15);
console.log(result2, typeof result2); 
console.log(15, typeof 15);

//number to Boolean > true yapıyor , 0 hariç hepsi true döner, 0 false döner
let result3=Boolean(15);
console.log(result3, typeof result3); 
let result4=Boolean(0);
console.log(result4, typeof result4); 

//string to Boolean > true yapıyor, sadece boş '' string ise false alıyor, boşluk ' ' ise true
let result5=Boolean('0');
console.log(result5, typeof result5); 

let result6=Boolean('');
console.log(result6, typeof result6); 


