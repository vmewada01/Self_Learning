document.querySelector("form").addEventListener("submit",bozaz)

function bozaz(){
    event.preventDefault();
    let p_name = document.querySelector("#category").value
    let p_title =document.querySelector("#name").value 
    let p_price =document.querySelector("#price").value 
    // console.log(p_name,p_price,p_title)

    let tr=document.createElement("tr");

    let td1=document.createElement("td");
     td1.innerText=p_name

     let td2=document.createElement("td");
     td2.innerText=p_title;

     let td3=document.createElement("td");
     td3.innerText=p_price;

     tr.append(td1,td2,td3);

     document.querySelector("tbody").append(tr);


}