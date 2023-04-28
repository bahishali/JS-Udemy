const button=document.querySelector('button');

// button.addEventListener('click',()=>{
//     console.log('Clicked');
// })


const liItems=document.querySelectorAll('li');
liItems.forEach(item=>{
    item.addEventListener('click',e=>{
        // console.log(e);
        // //e.target tıkladığında bulunduğu etiket seçiyor
        // console.log(e.target);
        // console.log('Clicked li');
        // //tıkladığının style'ını değiştirme
        // e.target.style.color='blue';
    })
})

//kaldırma

const ul=document.querySelector('ul');
ul.addEventListener('click',e=>
{
    // console.log(e);
    console.log(e.target);
    if(e.target.tagName==='LI'){
        e.target.remove();
    }
})
// ul.remove();

liItems.forEach(item=>{
    item.addEventListener('click',e=>{
        //stopPropagiton ile parentlar diğerleri tetiklenmiyor sadece liItems daki e ler
        e.stopPropagation();
        console.log(e.target);
        // e.target.remove();
    })
})


button.addEventListener('click',()=>{
    const li=document.createElement('li');
    li.textContent='JavaScript';
    //append ul un sonuna ekler
    // ul.append(li);
    //prepend ul un başına ekler
    ul.prepend(li)
})