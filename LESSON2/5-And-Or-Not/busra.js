// && : and operator



const newpassword='asdkjhjhjg!gjh';
if(newpassword.length>=12 && newpassword.includes('!')){
    console.log('Password is very strong.')
}
else if(newpassword.length>=8){
    console.log('Password is enough.');
}
else{
    console.log('Password is not long enough. Please try again.')
}

// || : or operator
const newpassword2='asdkjhj!';
if(newpassword2.length>=12 || newpassword2.includes('!')){
    console.log('Password is very strong.');
}
else if(newpassword2.length>=8){
    console.log('Password is enough.');
}
else{
    console.log('Password is not long enough. Please try again.');
}


 //  ! : not operator !control : control false değilse > false un değili true
const control=false;
if(!control){
    console.log('Control is successfull.');
}