//attribute nedir? =özellik nitelik simge
// href, class, id, style, src html attribute'leri

const link=document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','http://www.boztraining.com');
link.textContent='Boz Training';

const pdegeri=document.querySelector('p');
console.log(pdegeri.getAttribute('class'));
pdegeri.setAttribute('class','error')
console.log(pdegeri.getAttribute('class'));

//set attribute eğer o attribute varsa update ediyor yoksa create yapıyor
//mesela style attribute u yok ekleyebiliriz

pdegeri.setAttribute('style','color:red;background-color:yellow; text-align:center')