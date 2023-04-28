//fonk tanımlamak için 1.yol
function bus()
{
    console.log("Bus");
}

//bir fonk defalarca çağırabiliriz
bus();
bus();
bus();

// fonk tanımlamak için 2. yol: function expression
const busra = function(){
    console.log("busra");
}

busra();

//1.yol ile fonk'u tanımlamadan çağırabiliriz

bus2();
function bus2()
{
    console.log("Bus2");
}




//2.yolda tanımlamadan önce fonk u çağıramayız
//hata verir
// busra2();
// const busra2 = function(){
//     console.log("busra2");
// }

