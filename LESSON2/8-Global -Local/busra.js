// let > locak tanımlanır
// var > global tanımlanır

// Example 1
// let ile tanımladığım local de ve globalde update edilmediği sürece aynı değeri döndürürü

let age = 28;

if(true){
    console.log('E1: inside if:',age);
}

console.log('E1: outside of if:', age )

// Example 2
// let ile tanımladığımızı local'de update edersek global'de de değişir.

let age2 = 28;

if(true){
    age2 = 18
    console.log('E2: inside if:',age2);
}

console.log('E2: outside of if:', age2 )

// Example 3
// let ile tanımladığımız bir değeri global de tekrar tanımlayamayız hata verir
// let age3 = 28;
// let age3 = 30; //tanımlayamayız hata verir ''age' has already been declared' hatası

// if(true){
//     age3 = 18
//     console.log('E3: inside if:',age3);
// }

// console.log('E3: outside of if:', age3 )


// Example 4
// let ile tanımladığımız bir değeri local'de tekrar tanımlayabiliriz ama değer globalde değişmez

let age4 = 28;

if(true){
    let age4 = 18
    console.log('E4: inside if:',age4);
}

console.log('E4: outside of if:', age4)

// Example 5
// let ile tanımladığımız bir değeri local'de tekrar tanımlayabiliriz ama değer globalde veya bir önceki local'de değişmez sadece tanımlandığı yerde değişir

let age5 = 28;

if(true)
{
    let age5 = 18
    console.log('E5: inside if:',age5);
    if(true)
    {
        let age5 = 12
        console.log('E5: inside if of inside if:',age5);
    }
}

console.log('E5: outside of if:', age5)

// Example 6
let age6 = 28;

if(true)
{
    age6 = 18
    console.log('E6: inside if:',age6);
    if(true)
    {
        let age6 = 12
        console.log('E6: inside if of inside if:',age6);
    }
}

console.log('E6: outside of if:', age6)

// Example 7
// var 
let age7 = 28;

if(true)
{
    let age7 = 18
    console.log('E7: inside if:',age7);
    if(true)
    {
        let age7 = 12;
        let name="batu"; //local'de ilk defa tanımlandığı için global'de undefined hatası veriyor
        var name2="bus"; //local'de tanımlanmasına rağmen global'de de değer tanımlı
        console.log('E7: inside if of inside if:',age7,name,name2);
    }
}

// console.log('E7: outside of if:', age7,name,name2) //name'i dışarıya basamıyor undefined hatası alıyor yani local de ilk defa tanımlanan bir değer globalde tanımlanmamış oluyor
console.log('E7: outside of if:', age7,name2);

