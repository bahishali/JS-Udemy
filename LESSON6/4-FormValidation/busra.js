const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const username=form.username.value;
    const usernamePattern=/^[a-z]{6,12}$/;

    if(usernamePattern.test(username))
    {
        message.textContent='Successful!'
    }
    else
    {
        message.textContent='The username must contain only lowercase and must be between 6 to 12 characters!';
    }
})