// const content=document.querySelector('p');

// console.log(content.classList);

// content.classList.add('batu');
// content.classList.remove('error');

//p etiketleri text'inde
//success yazana success clası eklemek 
//error yazana error classı eklemek

const content=document.querySelectorAll('p');

content.forEach(a=>{
    if(a.textContent.includes('error')){
        a.classList.add('error')
    }
    if(a.textContent.includes('success')){
        a.classList.add('success')
    }
})