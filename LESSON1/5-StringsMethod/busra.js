let fullname="Busra Batu Ahıshalı";

let last=fullname.lastIndexOf('h');
console.log(last);

let starttoend=fullname.slice(0,5); //0.indexten başlasın 5.indexe kadar,5 dahil değil
console.log(starttoend);

let starttoendSubstr=fullname.substr(5,5); //5. indexten başlasın 5 index ilerlesin
console.log(starttoendSubstr);


let replacement=fullname.replace('h','w'); // h gördüğün yere w yaz !! ilk gördüğünü değiştirdi sadece diğerlerini değiştirmedi
console.log(replacement);

let replacementAll=fullname.replaceAll('h','w'); // tüm h gördüğü yere w yazar
console.log(replacementAll);