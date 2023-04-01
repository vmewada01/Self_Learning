
// src="https://maps.google.com/maps?q=Sehore&t=&z=10&ie=UTF8&iwloc=&output=embed"
// https://www.omdbapi.com/?t=Murder&apikey=beaa47cd


function submitCity() {
    let city = document.querySelector("#city").value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e77d45601b7d2f666f02568105780e67`

    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res);
        append(res)
    })
        .catch(function (err) {
            console.log(err)
        })

}

function Bylocation(lat, lon) {

    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e77d45601b7d2f666f02568105780e67`

    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res);
        append(res)
    })
        .catch(function (err) {
            console.log(err)
        })

}

// function day_wise_location(lat,lon,cnt){
//     // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

//     const url = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=e77d45601b7d2f666f02568105780e67`

//     fetch(url).then(function (res) {
//         return res.json()
//     }).then(function (res) {
//         console.log(res);
//         append(res)
//     })
//         .catch(function (err) {
//             console.log(err)
//         })
// }







function append(data) {

    document.querySelector("#container").innerHTML = null;

    let div = document.createElement("div")

    let map = document.querySelector("#gmap_canvas")

    let p1 = document.createElement("p")
    p1.innerText = `City Name : ${data.name}`

    let p2 = document.createElement("p")
    p2.innerText = `Min Temp : ${(data.main.temp_min) - 273} C`

    let p3 = document.createElement("p")
    p3.innerText = `Max. Temp : ${(data.main.temp_max) - 273} C`

    let p4 = document.createElement("p")
    p4.innerText = `Temperature : ${(data.main.temp) - 273} C`


    let p5 = document.createElement("p")
    p5.innerText = `Humidity : ${data.main.humidity}`

    let p6 = document.createElement("p")
    p6.innerText = `Wind Speed : ${data.wind.speed} km/h`



    div.append(p1, p2, p3, p4, p5, p6)
    document.querySelector("#container").append(div)

    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=10&ie=UTF8&iwloc=&output=embed`

}

function getweather() {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
        const crd = position.coords;

        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        Bylocation(crd.latitude, crd.longitude)


    }
}

