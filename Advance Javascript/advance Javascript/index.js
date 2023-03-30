//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

let obj1 = { scope: "Scope determines the accessibility of variables, objects, and functions from different parts of the code." }
let obj2 = { hoisting: "the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code." }
let obj3 = { constructorfunctions: "A constructor is a special function that creates and initializes an object instance of a class." }
let obj4 = { prototype: "All JavaScript objects inherit properties and methods from a prototype." }


localStorage.setItem("scope", JSON.stringify(obj1))
localStorage.setItem("hoisting", JSON.stringify(obj2))
localStorage.setItem("constructorfunctions", JSON.stringify(obj3))
localStorage.setItem("prototype", JSON.stringify(obj4))

document.querySelector("#scope").addEventListener("click", scopefun)

function scopefun() {
    event.preventDefault()
    let result = JSON.parse(localStorage.getItem("scope"))
    let box = document.createElement("div")

    let video = document.createElement("video")
    video.src = "/scope/video1935012161.mp4"
    video.style.width = "1000px"
    video.controls = true;
    // console.log(result);
    box.append(video)


    let scope = document.querySelector("#scop")
    scope.innerText = result.scope

    scope.append(box);

}

document.querySelector("#hoisting").addEventListener("click", hoistingfun)

function hoistingfun() {
    event.preventDefault()
    let result = JSON.parse(localStorage.getItem("hoisting"))
    let box = document.createElement("div")
    let video = document.createElement("video")
    video.src = "/Hoisting/video1257703683.mp4"
    video.style.width = "1000px"
    video.controls = true;
    // console.log(result);
    box.append(video)

    let hoist = document.querySelector("#hoistin")
    hoist.innerText = result.hoisting

    hoist.append(box);

}

document.querySelector("#constructorfunctions").addEventListener("click", constructorfun)

function constructorfun() {
    event.preventDefault()
    let result = JSON.parse(localStorage.getItem("constructorfunctions"))

    let box = document.createElement("div")
    // console.log(result);
    let video = document.createElement("video")
    video.src = "/constructor function/video1170651226.mp4"
    video.style.width = "1000px"
    video.controls = true;

    box.append(video)

    let cf = document.querySelector("#constructorfunction")
    cf.innerText = result.constructorfunctions
    cf.append(box)
}

document.querySelector("#prototype").addEventListener("click", prototypefun)

function prototypefun() {
    event.preventDefault()
    let result = JSON.parse(localStorage.getItem("prototype"))

    let box = document.createElement("div")

    let video = document.createElement("video")
    video.src = "/prototype/video1866948807.mp4"
    video.style.width = "1000px"
    video.controls = true;

    box.append(video)
    //console.log(result);
    document.querySelector("#prototyp").innerText = result.prototype
    document.querySelector("#prototyp").append(box)
}

