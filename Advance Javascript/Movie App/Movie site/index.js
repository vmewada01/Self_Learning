document.querySelector("form").addEventListener("submit", movieSearch)
//  let apikey="beaa47cd"
// let search =document.querySelector("#moviename").value
// let res;
// let data = []
function movieSearch() {
    event.preventDefault()
    let moviename = document.querySelector("#moviename").value
    //   console.log(moviename)
   // let url = `http://www.omdbapi.com/?s=thore&apikey=beaa47cd`
    //   `https://www.omdbapi.com/?apikey=adec4a1d&type=movie&t=${newmovie}`

    //    let API = "http://www.omdbapi.com/?s=thor&apikey=beaa47cd"

       let API =`https://www.omdbapi.com/?t=${moviename}&apikey=beaa47cd`

         let data;
      async function  display_data(){

         let res = await fetch(API);
           res = await res.json();
          // console.log(res)
           data = res.Search;
          console.log(data)
        //   appendData(data)
      }
      
      display_data()

    // console.log(url)
    // fetch(url)
    //     .then(function (res) {
    //         return res.json()
    //     }).then(function (res) {
    //         console.log(res)
    //         data.push(res)
    //         appendData(data)
    //         //console.log(res)

    //     })
    //     .catch(function (err) {
    //         console.log("err:", err)
    //     })

}




function appendData(data) {
    console.log(data)
    data.forEach(function (ele) {
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = ele.Poster

        let para1 = document.createElement("p")
        para1.innerText = ele.Type

        let para2 = document.createElement("p")
        para2.innerText = ele.Title

        let para3 = document.createElement("p")
        para3.innerText = ele.Year

        let para4 = document.createElement("p")
        para4.innerText = ele.imdbID

        // let para5 = document.createElement("p")
        // para5.innerText = ele.imdbID


        // let para6 = document.createElement("p")
        // para6.innerText = ele.Writer

        div.append(image, para2, para1, para3, para4)

        document.querySelector("#display").append(div);

    })
}