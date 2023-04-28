const box=document.querySelector('.box');
box.addEventListener('mousemove',e=>{
    // console.log(e);
    // console.log(e.offsetX,e.offsetY);
    box.textContent=`x coordinate ${e.offsetX}, y coordinate ${e.offsetY}`
})


//wheel event mouse un orta tuşuyla tetikleniyor.
document.addEventListener('wheel',e=>{
    // console.log(e);
    console.log(e.pageX,e.pageY);
})