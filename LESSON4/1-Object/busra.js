let student = {
    name:'Busra',
    age:28,
    email:'busra@hotmail.com',
    eductionstatus: 'graduated',
    lessons:['css','html','JS']
};

console.log(student);
console.log(student.name);
console.log(student.age);
//property e ulaşmak için 1.yöntem student.age . koyup property'i yazıyorsun
// object.propertyname
//property update
student.age=29;
console.log(student.age);

//property e ulaşmak için 2.yöntem
//object['propertyname']
console.log(student['age']);
//property update
student['age']=28;
console.log(student['age']);


//tipini yazdırma > object

console.log(typeof student);