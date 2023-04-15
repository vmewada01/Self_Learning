// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let amount = JSON.parse(localStorage.getItem("amount"))

document.querySelector("#wallet").innerText = amount

console.log(amount)


//  function searchMovies(){
    
//   id=  setTimeout(function(){
//        search()
  
//   },1000)
       
// }

   // console.log(input)
  async function search(){
    try{
        let input = document.querySelector("#search").value 

        // let API =`https://www.omdbapi.com/?t=${moviename}&apikey=beaa47cd`
        // let API =`https://www.omdbapi.com/?t=${search}&apikey=beaa47cd`
   
     
        let res = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=beaa47cd`)
        let data = await  res.json()

       let result = data.Search 
       console.log(result)
       appendData(result)

    }
   catch(err){
    console.log(err)
   }


   }
   
    function appendData(data){
        document.querySelector("#movies").innerHTML= null;
      data.forEach((el)=>{
        let div = document.createElement("div")

        let image= document.createElement("img")
        image.src= el.Poster

        let p = document.createElement("p")
        p.innerText= el.Title


        let btn = document.createElement("button")
        btn.innerText= "Book Now"
        btn.setAttribute=("class","book_now")
        btn.addEventListener("click",function(){
            bookShow(el)
        })

        div.append(image,p,btn)

        document.querySelector("#movies").append(div)
        
    })
   }
     let arr=[]
     function bookShow(el){
     let obj ={
        image: el.Poster,
        title: el.Title,
     }
     arr.push(obj)
     console.log(arr)
     localStorage.setItem("movie",JSON.stringify(arr))
     window.location.href="checkout.html"

     }

     function debounce(func,delay){
        if(id){
            clearTimeout(id);
        }
        id=setTimeout(function(){
            func();
        },delay)

    }
   
 





