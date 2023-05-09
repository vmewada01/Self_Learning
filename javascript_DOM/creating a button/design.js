
var btnArr = [
    { name: "Primary", color: "white", bgColor: "blue" },
    { name: "Secondary", color: "white", bgColor: "grey" },
    { name: "Danger", color: "white", bgColor: "red" },
    { name: "Warning", color: "black", bgColor: "yellow" },
    { name: "Info", color: "white", bgColor: "cyan" },
    { name: "Light", color: "black", bgColor: "white" },
    { name: "Success", color: "white", bgColor: "green" },
    { name: "Dark", color: "white", bgColor: "black" },
    { name: "Link", color: "blue", bgColor: "white" },
    { name: "Dark Pink", color: "blue", bgColor: "pink" },
];


for (let i = 0; i < 9; i++) {

}
btnArr.map(function (ele, ind, arr) {
    // console.log(ele);
    let btn = document.createElement("button")
    btn.textContent = ele.name
    btn.style.backgroundColor = ele.bgColor
    btn.style.color = ele.color

    document.querySelector("body").append(btn);
})
