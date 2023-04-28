//Angular React Vue bilinen frameworkler
const framework1 ='Angular';
const framework2 ='React';
const framework3 ='Vue';

//string birleştirme
let result='JS Frameworks that Busra knows : ' + framework1 + ', ' + framework2 + ',and ' + framework3;
console.log(result);

//2.Yol string birleştirme
let result1=`JS Frameworks that Busra knows : ${framework1}, ${framework2},and ${framework3}`
console.log(result1);

//3.Yol HTML Template kullanımı

let html=`
 <h1>${framework1}</h1>
 <h2>${framework2}</h2>
 <h3>${framework3}</h3>
`
console.log(html);