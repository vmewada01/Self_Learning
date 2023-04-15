// Store the wallet amount to your local storage with key "amount"
let cart_amount = []

 function addMoney(){
  let amount = document.querySelector("#amount").value 

let new_cart_amount=document.querySelector("#wallet")
    new_cart_amount.innerText = amount

 console.log(new_cart_amount)
 let obj={
    number: new_cart_amount,
 }
  cart_amount.push(obj)

   localStorage.setItem("amount",JSON.stringify(cart_amount))

 }

 function bookShow(){
    window.location.href="movies.html"
 }