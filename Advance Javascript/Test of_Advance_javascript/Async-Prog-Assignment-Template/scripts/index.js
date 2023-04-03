let i = 0;

let photos = [
    "https://images.unsplash.com/photo-1659482633347-e56ce63d147b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1679850134579-472a06699a15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1679633269554-9f31f61f38bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://plus.unsplash.com/premium_photo-1674086970773-726e445f5802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
]
console.log(photos)
let box = document.createElement("div")
let image = document.createElement("img")

setInterval(function () {
    if (i == photos.length) {
        i = 0;
    }
    image.src = photos[i];
    i++

    box.append(image)
    document.querySelector("#slideshow").append(box);


}, 2000)

let movies = [
    {
        name: "Rocketry",
        release: 2022,
        IMDb: 7.0,
        poster: "https://filmik.in/wp-content/uploads/2022/06/Rocketry-The-Nambi-Effect-2022.webp",
    },
    {
        name: "83 Movie",
        release: 2021,
        IMDb: 8.0,
        poster: "https://m.media-amazon.com/images/M/MV5BNTc0MWIzMjYtMDg4Mi00YmM3LWIxNGUtYjQ5NzBlZTM3YWI2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    },
    {
        name: "Shiddat",
        release: 2021,
        IMDb: 6.0,
        poster: "https://m.media-amazon.com/images/M/MV5BN2U2NzcyYWQtYWRkNi00NWE2LWFlN2UtMjY0MzJkMWQzZDI2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
    },
    {
        name: "Anek",
        release: 2022,
        IMDb: 5.0,
        poster: "https://m.media-amazon.com/images/M/MV5BYzNiNDM4NjYtZDMyMS00YTgyLWIzMWYtNmFhMjBiNWJiN2RjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    },
    {
        name: "HIT",
        release: 2022,
        IMDb: 4.5,
        poster: "https://m.media-amazon.com/images/M/MV5BZjdjOTQwY2UtZDM5Zi00YTU0LWIzOTQtMTFjZThmZDNhOWZhXkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_FMjpg_UX1000_.jpg",
    },
    {
        name: "GanguBai",
        release: 2022,
        IMDb: 7.0,
        poster: "https://www.scrolldroll.com/wp-content/uploads/2022/04/Gangubai-Kathiawadi-Best-bollywood-movies-released-in-2022.jpg",
    },
    {
        name: "Attack",
        release: 2022,
        IMDb: 7.8,
        poster: "https://m.media-amazon.com/images/M/MV5BNzY1MWU0YjMtNGQ1ZS00OWYyLTliOTAtMDYzNjEyM2UxNmI4XkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_FMjpg_UX1000_.jpg",
    },
    {
        name: "Badhai Do",
        release: 2022,
        IMDb: 4.0,
        poster: "https://m.media-amazon.com/images/M/MV5BZjExNGM5MTMtNTFlNy00OThlLTlhYzctOWEzZjQ4MWY3YTUyXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    },
    {
        name: "Ek Villain Return",
        release: 2022,
        IMDb: 6.0,
        poster: "https://m.media-amazon.com/images/M/MV5BZTU5YjI3YjMtZjU4Mi00ZTM3LTlmM2MtOTA2N2EwOGIwOTE3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    },


]

window.addEventListener("load", function () {
    displaydata(movie)
})


document.querySelector("#sorting").addEventListener("change", filter)

function filter() {
    let selected = document.querySelector("#sorting").value

    //console.log(selected)
    if (selected == "lth") {
        movie.sort(function (a, b) {
            return a.IMDb - b.IMDb
        })
        displaydata(movie)
        // console.log(movie)
    }
    if (selected == "htl") {
        movie.sort(function (a, b) {
            return b.IMDb - a.IMDb
        })
        displaydata(movie)
        // console.log(movie)
    }
}





localStorage.setItem("movies", JSON.stringify(movies))

let movie = JSON.parse(localStorage.getItem("movies"));

function displaydata(movie) {
    document.querySelector("#movies").innerHTML = null;

    movie.map(function (element, index, array) {
        let box = document.createElement("div")

        let image = document.createElement("img")
        image.src = element.poster
        image.style.width = "200px"

        let p1 = document.createElement("p")
        p1.innerText = element.name

        let p2 = document.createElement("p")
        p2.innerText = "Release Date :" + element.release

        let p3 = document.createElement("p")
        p3.innerText = "IMDB :" + element.IMDb

        box.append(image, p1, p2, p3)
        document.querySelector("#movies").append(box)



    })
}







