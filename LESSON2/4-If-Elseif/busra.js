
const age=28;

if(age>18){
    console.log('She is over 18 years old.')
}

const nameSurname=['bus','batu','gökçe'];

if(nameSurname.length>2){
    console.log('These are my students.')
}

const password='asdkj';
if(password.length>=8){
    console.log('Password is long enough.')
}
else{
    console.log('Password is not long enough. Please try again.')
}


const newpassword='asdkjhgjh';
if(newpassword.length>=12){
    console.log('Password is strong enough.')
}
else if(newpassword.length>=8){
    console.log('Password is enough.')
}
else{
    console.log('Password is not long enough. Please try again.')
}