const title=document.getElementById('bus');
console.log(title);

const errors=document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);
//HTML Collection oluyor

//hepsini tek tek basmak istersem
// errors.forEach(error=>{
//     console.log(error)
// })

//HTML Collection da forEach'i kullanamıyorum
//Uncaught TypeError: errors.forEach is not a function at busra.js:10:8
//hatası alıyorum

const pTags=document.getElementsByTagName('p');
console.log(pTags);
console.log(pTags[1]);