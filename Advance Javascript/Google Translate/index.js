let id;

    // helper function
    function read(id) {
        return document.getElementById(id).value
    }

    document.getElementById("out_data").innerText=null

    async function Translate() {
   
        //console.log(input);
  
        try{

            const   input_lang= read("inp_lang")
        //   console.log(input_lang)
            const output_lang= read("out_lang")
            // console.log(output_lang)


            const input = read("input_text")

            const res = await fetch("https://libretranslate.de/translate",{
                method: "POST",
                 
                body: JSON.stringify({
                    q: input,
                    source: input_lang,
                    target: output_lang,
                    format: "text",
                }),
            //  additional information about our tab
            headers: {
            "Content-Type": "application/json",
            },

            });

          const  {translatedText} = await res.json();

          //console.log(translatedText)

           document.getElementById("out_data").innerText= translatedText


        }
        catch(err){
            console.log(err)
        }
   }


   function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
   id= setTimeout(function(){
    func()
   },delay)

   }
function voice(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult=function(event){
        console.log(event);
        document.getElementById("input_text").value=event.results[0][0].transcript;
        Translate()
    }
    recognition.start();
}