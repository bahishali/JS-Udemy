//document object
// const error=document.querySelector('p'); //hepsini seçmez ilk p yi seçer
// console.log(error)

// const error2=document.querySelector('.error'); //ilk class olanı seçer
// console.log(error2)

// const error3=document.querySelector('div.error'); //ilk class olanı seçer
// console.log(error3)

const errors=document.querySelectorAll('p'); //hepsini
// console.log(errors);
// console.log(errors[0]);


//hepsini tek tek basmak istersem
errors.forEach(error=>{
    console.log(error)
})
