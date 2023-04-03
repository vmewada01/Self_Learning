let signup_data= JSON.parse(localStorage.getItem("signup_details")) || [] 
 
  console.log(signup_data)
   document.querySelector('form').addEventListener("submit",logindetails)
   function logindetails(){
    event.preventDefault()
    let email  = document.querySelector("#email").value 
    let password =document.querySelector("#password").value 

    for(let i=0; i<signup_data.length; i++){
        if(email ==signup_data[i].email && password==signup_data[i].password){
          alert("Login Successfully")
          window.location.href="index.html"
         
        }
       else{
        alert("Invalid Credentials")
        window.location.reload()
        break;
       }
    }
   
   }
