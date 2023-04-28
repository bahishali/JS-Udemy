

// 1- String Arrays
let names = ['bus','batu','hayri'];
console.log(names[1]);
    //değiştirme
names[1]='batuhan';
console.log(names[1]);

//2-Number Arrays
let ages=[28,24,60];
console.log(ages[2]);

//3-Mixed Arrays : genelde kullanılmıyor
let mixedArray=['bus',28,'batu',24,'hayri',60];
console.log(mixedArray);
console.log(mixedArray.length);


//JOIN Method
let wHyphen=names.join('-');
console.log(wHyphen);

let wComma=names.join(', ');
console.log(wComma);

//indexOf
let order=names.indexOf('hayri');
console.log(order);

//concat
let adding=names.concat(['göktug','gökçe']);
console.log(adding);

//push : bir diziye eleman eklemek istediğimde
let addingItem=names.push('gizem')
console.log(names);
console.log("aaa: " +addingItem);

//pop : diziye eklenen son elemanı veya son elemanı çıkartmak için

let subtractItem=names.pop();
console.log(names);
console.log(subtractItem);


