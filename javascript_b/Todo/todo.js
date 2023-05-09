document.querySelector("form").addEventListener("submit", todolist)

function todolist() {
  event.preventDefault();
  let nam = document.querySelector("#name").value
  let quan = document.querySelector("#qty").value
  let prio = document.querySelector("#priority").value

  let tr = document.createElement("tr");
  let td1 = document.createElement("td")
  td1.innerText = nam
  let td2 = document.createElement("td")
  td2.innerText = quan
  let td3 = document.createElement("td")
  td3.innerText = prio

  tr.append(td1, td2, td3);

  document.querySelector("tbody").append(tr);


}