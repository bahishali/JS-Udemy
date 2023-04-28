const form=document.querySelector('.signupForm');
const username=document.querySelector('#username');

form.addEventListener('submit', e=>{
    e.preventDefault();
    // console.log('Form has been submitted!');
    // console.log(username.value);
    console.log(form.username.value);
})

