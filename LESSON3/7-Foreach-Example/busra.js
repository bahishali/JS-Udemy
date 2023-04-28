const myul=document.querySelector('.main');

let students=["busra","batu","gokce","goktug"];
let html=``;
students.forEach(student=>{
    html+=`<li>${student}</li>`
})

console.log(html);

myul.innerHTML=html;