// const squarearea =function(edge){
//     let area=edge**2;
//     // console.log(area);
//     return area;

//     // return edge**2;
// }

//arrow func ile tanımlama
// const squarearea =edge=>
// {
//     return edge**2;
// }

//eğer tek bir parametre alıyorsa parantezleri koymana gerek yok birden fazla parametre varsa () koyman gerekir
// const squarearea =(edge,area)=>
// {
//     return edge**2;
// }


//return'üm tek satırsa {} paramtezleri de kullanmak zorunda değiliz return ü de kaldırabiliriiz
const squarearea =edge=> edge**2;
const result=squarearea(6);
console.log(result);


const bus=() => 'Busra';
const result2=bus();
console.log(result2);

//Example 2
// const bill=function(products,tax){
//     let total=0;
//     for(let i=0;i<products.length;i++){
//         total+=products[i]+products[i]*tax;
//     }
//     return total;
// }

const bill=(products,tax)=>{
    let total=0;
    for(let i=0;i<products.length;i++){
        total+=products[i]+products[i]*tax;
    }
    return total;
}

console.log(bill([10,20,30],0.25));