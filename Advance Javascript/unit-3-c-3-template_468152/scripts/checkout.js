// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = JSON.parse(localStorage.getItem("amount"))

let wallet= document.querySelector("#wallet")
 wallet.innerText= amount



let movie= JSON.parse(localStorage.getItem("movie"))
//console.log(movie)

movie.forEach((el)=>{
    let div = document.createElement("div")

    let image= document.createElement("img")
    image.src= el.image

    let p = document.createElement("p")
    p.innerText= el.title

    div.append(p,image)
    document.querySelector("#movie").append(div)
})

function bookNow(){
    let seat = document.querySelector("#number_of_seats").value 
    console.log(seat*100)
    if(seat*100>amount){
        alert("Insufficient Balance!")
    }
    else{
     alert("Booking Successful!")
     wallet.innerText = amount-seat*100
     let reamaining= amount-seat*100
     localStorage.setItem("amount",JSON.stringify(reamaining))

     amount = JSON.parse(localStorage.getItem("amount"))
    
    }
}