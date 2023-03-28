let data = JSON.parse(localStorage.getItem("Products")) || []

console.log(data)

data.map(function (ele, ind) {
    let box = document.createElement("div")

    let image = document.createElement("img")
    image.src = ele.image

    let p1 = document.createElement("p")
    p1.innerText = ele.name

    let p2 = document.createElement("p")
    p2.innerText = ele.category

    let p3 = document.createElement("p")
    p3.innerText = ele.price

    let box2 = document.createElement("div")
    box2.style.display = "flex"
    box2.style.justifyContent = "space-between"

    let btn1 = document.createElement("button")
    btn1.innerText = "Remove"
    btn1.addEventListener("click", function () {
        remove(ele, ind)
    })

    let btn2 = document.createElement("button")
    btn2.innerText = "Sold"
    btn2.addEventListener("click", myfunction)
    function myfunction() {
        if (ele.sold == "true") {
            ele.sold = "false";
            btn2.style.backgroundColor = "red"
        }

        else {
            ele.sold = "true";
            btn2.style.backgroundColor = "green"
        }
    }

    box2.append(btn1, btn2)

    box.append(image, p1, p2, p3, box2)

    document.querySelector("#container").append(box)


    function remove(ele, ind) {
        data.splice(ind, 1)
        localStorage.setItem("Products", JSON.stringify(data));
        window.location.reload();
    }




})




