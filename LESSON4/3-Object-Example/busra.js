
let student = {
    name:'Busra',
    age:28,
    email:'busra@hotmail.com',
    eductionstatus: 'graduated',
    lessons:['css','html','JS'],
    login(){
        console.log('Student logged in.')
    },
    logout(){
        console.log('Student logged out.')
    },
    printLessons(){
        console.log(this); // burada bulunduğu yer student object si o yüzden student objesini yazdı
        console.log(student.lessons);
        console.log(this.lessons); //this student yerine kullanılabilir 
        this.lessons.forEach(i=>{
            console.log(i);
        })
    }

};

console.log(this); //buradaki this window bulunduğu yer
student.printLessons();
student.login();
student.logout();
