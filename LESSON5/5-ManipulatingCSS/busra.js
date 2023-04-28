const title=document.querySelector('h1');
// console.log(title)

//setAttribute inline CSS'in üzerine yazar overwrite yapar yani öncekini ezer 
//o yğzden öncekiler ezmemek için setAttribute kullanmıyoruz
//title.setAttribute('style','padding:50px;')

console.log(title.style)

title.style.padding='50px';
title.style.fontSize='60px';
title.style.fontWeight='bold';