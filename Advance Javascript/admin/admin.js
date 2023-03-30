
let arr=JSON.parse(localStorage.getItem("Products")) || []

 function product(n,c,i,p,g,s){
    this.name=n 
    this.category=c 
    this.image=i 
    this.price = p 
    this.gender=g 
    this.sold=s
 }

function submitproduct(e){
    event.preventDefault()
    let form = document.querySelector("form")

    let name =form.name.value 

    let category =form.category.value 

    let image =form.image.value 

    let price =form.price.value 

    let gender =form.gender.value 

   let sold= form.sold.value

   let store =  new product(name,category,image,price,gender,sold)
   console.log(store)
   arr.push(store)
   localStorage.setItem("Products",JSON.stringify(arr)) 

}