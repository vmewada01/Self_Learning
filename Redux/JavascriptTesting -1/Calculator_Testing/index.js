// function sum(a, b) {
//     a= Number(a)
//     b= Number(b)
//  if(arguments.length===0){
//    return "No arguemnets provided";
//  }
//  else if(arguments.length==1){
//     return "Need one more arguement";
//  }

// //   return a + b;
//  const sumValue = [...arguments].reduce((acc,elem)=> acc + Number(elem),0);
//  return sumValue;
// }

// module.exports = sum

function Percentage(a,savings){
    a=Number(a)
    var totalIncome= a

    if(a<250000){
        totalIncome= a
        return "Below 250000 no Tax"
    }
   else  if(a>=250000 && a<500000){
        totalIncome = a- Math.floor(a*0.10)
        return "10% of the amount earned"
    }
    else  if(a>=500000 && a<1000000){
        totalIncome = a-Math.floor(a*0.20)
        return "20% of the amount earned"
    }
    else  if(a> 1000000){
        totalIncome = a-Math.floor(a*0.30)
        return "30% of the amount earned"
    }
     
    else if(totalIncome < 500000){
        return "50% of the saving amount can be deducted"
    }
   


    return a
}


module.exports= Percentage