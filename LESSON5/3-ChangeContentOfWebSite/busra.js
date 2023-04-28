// const pdegeri=document.querySelector('p');
// console.log(pdegeri);
// console.log(pdegeri.innerText);


// pdegeri.innerText='Bus Ahishali Frontend Developer';

//innerText ile içeriğini Text i değiştiriyorsun

// const pdegeri=document.querySelectorAll('p');
// pdegeri.forEach(a=>{
//     console.log(a.innerText);
        //içeriği koruyup yanına eklemek için
//     a.innerText +=' new area';
// })

const content=document.querySelector('.content');
console.log(content.innerHTML);
//innerHTML ile HTML kodunu değiştiriyorsun

// content.innerHTML='<h2>Vue JS, React JS, Angular JS</h2>'
//içeriği koruyup yanına eklemek için
content.innerHTML+='<h2>Vue JS, React JS, Angular JS</h2>'


const students=['Bus','Batu','Gokce'];
students.forEach(student=>{
    content.innerHTML+=`<p>${student}</p>`
})