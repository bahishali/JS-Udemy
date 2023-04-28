console.log("Hello World!");
//string de tek tırnak çift tırnak farketmiyor.

let email="busra@hotmail.com";
console.log(email);


//string concatenation
let name="Bus";
let surname="Ahishali";
let fullname= name + " " + surname;
console.log(fullname);

//Karaketerleri çekme
console.log(fullname[0]);
console.log(fullname[2]);

//Kaç karakter 
console.log(fullname.length);
if(fullname.length>0)
{

}

//Methods
console.log(fullname.toUpperCase())
console.log(fullname)
console.log(fullname.toLocaleLowerCase())
console.log(fullname)

//Index
let index=fullname.indexOf('B');
console.log("B'nin bulunduğu index: "+index);