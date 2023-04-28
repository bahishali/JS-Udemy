const section=document.querySelector('section');
console.log(section.children);
//HTMLcollection ı foreach yapamadığımız için Array'e çevirdik

console.log(Array.from(section.children));

Array.from(section.children).forEach(child =>{
    child.classList.add('section-element')
})


const title=document.querySelector('h2');
//h2 nin parent'ı
console.log(title.parentElement);
//h2 nin parent'ının parent'ı
console.log(title.parentElement.parentElement);
//h2 nin bir sonraki sibling'i
console.log(title.nextElementSibling);
//h2 nin bir önceki sibling'i
console.log(title.previousElementSibling);
//h2 nin bir sonraki sibling'inin parent'ının child ları
console.log(title.nextElementSibling.parentElement.children);