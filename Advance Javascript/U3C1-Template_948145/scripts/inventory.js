let data =JSON.parse(localStorage.getItem("data"))
console.log(data)

data.map(function(element,index){
    let box=document.createElement("div")
    box.style.display="flex"
    box.style.flexDirection="column"
    box.style.border="2px solid black"
     box.style.textAlign="center"


    let image=document.createElement("img")
     image.src=element.image

     let p1=document.createElement("p")
     p1.innerText=element.name
    
     let p2=document.createElement("p")
     p2.innerText=element.brand

     let p3=document.createElement("p")
     p3.innerText=element.price

     let btn=document.createElement("button")
     btn.innerText="Remove"
     btn.addEventListener("click",function(){
        removefunction(element,index)
     })
    

     box.append(image,p1,p2,p3,btn)
     document.querySelector("#products_data").append(box);


})

function removefunction(element,index){
  data.splice(index,1)
  localStorage.setItem("data",JSON.stringify(data))
  window.location.reload()
}

document.querySelector("#add_product").addEventListener("click",goback)
function goback(){
    event.preventDefault()
    alert("hi")
    window.location.href="index.html"
}