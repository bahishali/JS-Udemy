const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');
const usernamePattern=/^[a-z]{6,12}$/;
//klavyeye basarken keydown çekerken keyup event i tetiklenir


form.addEventListener('submit',e=>{
    e.preventDefault();
    const username=form.username.value;

    if(usernamePattern.test(username))
    {
        message.textContent='Successful!';
    }
    else
    {
        message.textContent='The username must contain only lowercase and must be between 6 to 12 characters!';
    }
})


form.username.addEventListener('keyup',e=>{
    // console.log(e.target.value,form.username.value);
    //e.target.value,form.username.value iksi de aynı şey aynı değeri basıyor ama e.target.value' u kullanmak daha sağlıklı
    if(usernamePattern.test(e.target.value))
    {
        // console.log('Successful!');
        form.username.setAttribute('class','success');
    }
    else
    {
        // console.log('Failed!');
        form.username.setAttribute('class','error');
    }

    
})