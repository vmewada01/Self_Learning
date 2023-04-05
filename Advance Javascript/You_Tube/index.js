// let api = https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=q&key=[YOUR_API_KEY] HTTP/1.1




const api = "AIzaSyBRk54wMUvR7beTul0ZiMK5cFBvVshT_Ew"

const searchMovies = async () => {
    try {
        const q = document.querySelector("#query").value

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=${api}`)

        const data = await res.json();

        //    console.log(data.items)
        append(data.items)

    }
    catch (err) {
        console.log("err:", err)
    }
}

const append = (videos) => {
    let show_video = document.querySelector("#show_videos")
    show_video.innerHTML = null;

    videos.forEach(({ id: { videoId }, snippet: { title } }) => {
        // console.log(title)
        let div = document.createElement("div")
        div.style.border="30px"
        

        let iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${videoId}`

        iframe.width = "100%"
        iframe.height = "100%"
        iframe.allow = "fullscreen";

        const name = document.createElement("h5")
        name.innerText = title

        div.append(iframe, name)

        // console.log(videoId)
        let data = {
            title,
            videoId,
        }
        div.onclick = () => {
        //   alert("hi")
            show_video(data)
        }
        show_video.append(div)
    });
};
const show_video = (x) => {
    window.location.href = "video.html"
    localStorage.setItem("video", JSON.stringify(x))

}



async function show() {
    try {
        const res = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=in&videoCategoryId=17&key=AIzaSyBRk54wMUvR7beTul0ZiMK5cFBvVshT_Ew")

        const data = await res.json();
        append(data.items)
        console.log(data.items)

    } catch (error) {
        console.log(error)
    }
}
show()


