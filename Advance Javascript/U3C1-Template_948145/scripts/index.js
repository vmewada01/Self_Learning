//store the products array in localstorage as "data"

document.querySelector("#submit").addEventListener("click",submit)
 let array=JSON.parse(localStorage.getItem("data")) || []

function submit(){
    event.preventDefault()

    let brand =document.querySelector("#product_brand").value

    let name= document.querySelector("#product_name").value

    let image=document.querySelector("#product_image").value 

    let price = document.querySelector("#product_price").value 

     let obj={
        brand : brand,
        name : name,
        image : image,
        price : price,
     }


     //console.log(obj)
     array.push(obj);
     console.log(array);

   localStorage.setItem("data",JSON.stringify(array));
   window.location.reload()

}

document.querySelector("#show_products").addEventListener("click",showproduct)

function showproduct(){
    window.location.href="inventory.html"
}