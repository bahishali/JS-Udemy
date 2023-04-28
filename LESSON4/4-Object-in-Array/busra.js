// const lessons=[
//     {name:'css',progress:'90%'},
//     {name:'html',progress:'90%'},
//     {name:'JS',progress:'50%'}
// ]


let student = {
    name:'Busra',
    age:28,
    email:'busra@hotmail.com',
    eductionstatus: 'graduated',
    lessons:[
        {name:'css',progress:'90%'},
        {name:'html',progress:'90%'},
        {name:'JS',progress:'50%'},
    ],
    login(){
        //console.log('Student logged in.')
    },
    logout(){
        console.log('Student logged out.')
    },
    printLessons(){
        //console.log(this); // burada bulunduğu yer student object si o yüzden student objesini yazdı
        //console.log(student.lessons);
        //console.log(this.lessons); //this student yerine kullanılabilir 
        this.lessons.forEach(i=>{
            console.log(i.name,i.progress);
        })
    }

};

//console.log(this); //buradaki this window bulunduğu yer
student.printLessons();
// student.login();
// student.logout();
