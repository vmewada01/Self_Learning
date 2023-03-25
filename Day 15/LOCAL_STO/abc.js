document.querySelector("#ans").innerText = localStorage.getItem("addvalue")
let count = localStorage.getItem("addvalue");

let inc = document.querySelector("#up")
inc.addEventListener("click", in_function)

function in_function() {
    localStorage.setItem("addvalue", count)
    let head = document.querySelector("#ans")
    head.innerText = count++;

}
let dec = document.querySelector("#down")
dec.addEventListener("click", dec_function)

function dec_function() {
    localStorage.setItem("addvalue", count)
    let head = document.querySelector("#ans")
    head.innerText = count--;

}

