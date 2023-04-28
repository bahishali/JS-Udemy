// const username='111busrahis';
// const pattern=/[a-z]{6,10}/;

const username='111busrahis';
const pattern=/^[a-z]{6,10}$/;

//1.YOL
// let result=pattern.test(username);
// // console.log(result);

// if(result==true){
//     console.log('Successful!')
// }
// else{
//     console.log('Failed!')
// }

//2.YOL
let result=username.search(pattern);
console.log(result);
//true ise 0 ya da nereden başladıysa onu
//false da -1 basıyor