document.querySelector(("form")).addEventListener("submit",userdetails)
   
let signup= JSON.parse(localStorage.getItem("signup_details")) || []

function user(n,e,c,p){
 this.name=n 
 this.email =e 
 this.contact=c 
 this.password=p 

 }



function userdetails(){
  event.preventDefault()

    let name= document.querySelector("#name").value 
    let email =document.querySelector("#email").value 
    let number = document.querySelector("#contact").value 
    let password=document.querySelector("#password").value 

    if(name=="" || email=="" || number=="" || password==""){
      alert("please fill up the details")
    }
    else{
      let details = new user(name,email,number,password)
    signup.push(details)
    //console.log(details)
    localStorage.setItem("signup_details",JSON.stringify(signup));

     window.location.reload();

    }

 

}