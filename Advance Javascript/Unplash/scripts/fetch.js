let search =async (API,value)=>{

    const url =`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}
    `
    // https://api.unsplash.com/search/photos/?query=${office}&per_page=20&order_by=${sorting}&orientation=${filtering}&client_id=BeHyeov978wd4YU6zBbJaM-pX02r7vim6q1oARMRIvQ

    try{
        const res = await fetch(url)
        const data =  await res.json();
        console.log(data);
        return data
    }catch(err){
        console.log(err)
    }
}


let sorting =async (value,sorting,API)=>{

    const url =`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&order_by=${sorting}&client_id=${API}
    `
    // https://api.unsplash.com/search/photos/?query=${office}&per_page=20&order_by=${sorting}&orientation=${filtering}&client_id=BeHyeov978wd4YU6zBbJaM-pX02r7vim6q1oARMRIvQ

    try{
        const res = await fetch(url)
        const data =  await res.json();
       console.log(data);
        return data
    }catch(err){
        console.log(err)
    }
}

let filtering =async (value,filtering,API)=>{

   
    // https://api.unsplash.com/search/photos/?query=${office}&per_page=20&order_by=${sorting}&orientation=${filtering}&client_id=BeHyeov978wd4YU6zBbJaM-pX02r7vim6q1oARMRIvQ

    try{
        const url =`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&orientation=${filtering}&client_id=${API}
        `
        const res = await fetch(url)
        // console.log(res)
        const data =  await res.json();
       console.log(data);
        return data
    }catch(err){
        console.log(err)
    }
}

let append = (data,container)=>{
    data.forEach(({alt_description, urls:{small}})=>{
      let div = document.createElement("div")
      div.setAttribute("class","image")
  
      let image = document.createElement("img")
     
  
      let h3 = document.createElement("h3")
  
      image.src=small;
       h3.innerText = alt_description;
  
       div.append(image,h3)
       container.append(div);
  
    })
  }
  

export {search,append,sorting,filtering};