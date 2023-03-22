var data = [
    {
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/003/171/232/small/bag-paper-shopping-isolated-icon-free-vector.jpg",
        name: "LATEST MEN’S SNEAKER",
        price: "$25.00",
        strikedOffPrice: "$95.00"
    }, {
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/003/171/232/small/bag-paper-shopping-isolated-icon-free-vector.jpg",
        name: "LATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    }, {
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/003/171/232/small/bag-paper-shopping-isolated-icon-free-vector.jpg",
        name: "LATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    },
    {
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/003/171/232/small/bag-paper-shopping-isolated-icon-free-vector.jpg",
        name: "LATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    }
]
data.map(function (ele) {
    let main = document.createElement("div");


    let photo = document.createElement("img");
    photo.src = ele.imgUrl

    let name = document.createElement("p");
    name.innerHTML = ele.name

    let price = document.createElement("h3");
    price.innerText = ele.price

    let span = document.createElement("del");
    span.innerText = ele.strikedOffPrice

    price.append(span)

    main.append(photo, name, price)
    document.querySelector("#container").append(main)

})



