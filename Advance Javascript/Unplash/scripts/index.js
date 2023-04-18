// link :-> https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=BeHyeov978wd4YU6zBbJaM-pX02r7vim6q1oARMRIvQ

const API ="BeHyeov978wd4YU6zBbJaM-pX02r7vim6q1oARMRIvQ"

import {navbar} from "../components/navbar.js";

import {search,append,sorting,filtering } from "./fetch.js";




let n = document.getElementById("navbar");
n.innerHTML= navbar();

let search_img = (e)=>{
    if(e.key ==="Enter"){
        let value =document.querySelector("#query").value 
        search(API,value).then((data)=>{
            console.log(data);

            let container = document.querySelector("#container")

            container.innerHTML = null
            append(data.results ,container)
        })
      
    }
}
document.querySelector("#query").addEventListener("keydown",search_img);


let categories = document.querySelector("#categories").children

// console.log(categories);

  function cSearch(){
    console.log(this.id)
    search(API,this.id).then((data)=>{
        console.log(data);

        let container = document.querySelector("#container")

        container.innerHTML = null
        append(data.results ,container)
    })
  
}
for(let el of categories){
    el.addEventListener("click",cSearch)
}

let srt = ()=>{
    let sort = document.querySelector("#sorting").value 
    let value =document.querySelector("#query").value 

    sorting(value,sorting,API).then((data)=>{
        console.log(data)
        
        let container = document.querySelector("#container")

        container.innerHTML = null
        append(data.results ,container)
    })
}
document.querySelector("#sorting").addEventListener("change",srt)


let filt= ()=>{
    let filter= document.querySelector("#filtering").value
    let value =document.querySelector("#query").value 

    filtering(value,filtering,API).then((data)=>{
        console.log(data)
        
        let container = document.querySelector("#container")

        container.innerHTML = null
        append(data.results ,container)
    })
}
document.querySelector("#filtering").addEventListener("chnage",filt)

// let search = async ()=>{
//     let value = document.querySelector("#query").value 
//     const url =`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}
//     `
//     try{
//         const res = await fetch(url)
//         const data =  await res.json();
//         console.log(data);
//     }catch(err){
//         console.log(err)
//     }
// }

