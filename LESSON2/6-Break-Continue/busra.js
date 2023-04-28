

const grades=[15,45,32,0,100,90,7];

for(let i=0;i<grades.length;i++){
    //32 yi yazdırmak istemezsek
    if(grades[i]==32){
        continue;
    }
    console.log(grades[i]);
    if(grades[i]==100)
    {
        console.log('Congratulations! You got the highest grade!');
        break; // 100 den sonrakileri yazdırmayacak
    }
}