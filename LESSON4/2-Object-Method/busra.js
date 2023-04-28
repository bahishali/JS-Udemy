let student = {
    name:'Busra',
    age:28,
    email:'busra@hotmail.com',
    eductionstatus: 'graduated',
    lessons:['css','html','JS'],
    // login:function(){
    //     console.log('Student logged in.')
    // },
    // logout:function(){
    //     console.log('Student logged out.')
    // },

    //sadece parantezler ile de func tanımlayabiliriz
    login(){
        console.log('Student logged in.')
    },
    logout(){
        console.log('Student logged out.')
    },

    //!! objelerin içinde yukarıdaki gibi regular fonk. lar kullanabiliriz 
    //arrow func lar kullanılmaz
};

student.login();
student.logout();
