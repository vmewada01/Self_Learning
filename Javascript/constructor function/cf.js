

function customArray(){
  Object.defineProperty(this,'length',{
    value : 0,
    writable: true,
    enumerable: false,
  })

    this.length=arguments.length

    for(let i=0; i<this.length; i++){
        this[i] = arguments[i] 
    }
}

let array = new customArray("vishal","Naresh","vinod","safal")

customArray.prototype.धक्का = function(value){
    let index= this.length

    this[index]=value;
    this.length++
}

customArray.prototype.अलग_करना = function(){
    let index = this.length - 1 ;

     delete this[index];

     this.length--;
}

array.धक्का("Munnu");

array.धक्का("Sakshi");

array.अलग_करना();

array.अलग_करना();


console.log("array:",Object.values(array))










