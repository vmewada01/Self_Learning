function sum(a, b) {
    a= Number(a)
    b= Number(b)
 if(arguments.length===0){
   return "No arguemnets provided";
 }
 else if(arguments.length==1){
    return "Need one more arguement";
 }

//   return a + b;
 const sumValue = [...arguments].reduce((acc,elem)=> acc + Number(elem),0);
 return sumValue;
}

module.exports = sum
