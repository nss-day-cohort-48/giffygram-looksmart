import { sendGif } from "../data/provider.js"



const mainContainer = document.querySelector("#giffygram")




export const PostEntry = () => {
    let html = `
    <div class="field">
        <label class="label" for="gifTitle"></label>
        <input type="text" name="gifTitle" class="input" placeholder="Title"/>
    </div>
    <div class="field">
        <label class="label" for="gifURL"></label>
        <input type="URL" name="gifURL" class="input" placeholder="URL of Gif"/>
    </div>
    <div class="field">
        <label class="label" for="gifStory"></label>
        <input type="text" name="gifStory" class="input" placeholder="Story behind your gif..."/>
    </div>  
    
    <button class="button" id="submitGif">Save Gif</button>
    <button class="button" id="cancelGif">Cancel Gif</button>
    `

return html


}

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submitGif") {

        const usergifTitle = document.querySelector("input[name='gifTitle']").value
        const usergifURL= document.querySelector("input[name='gifURL']").value
        const usergifStory = document.querySelector("input[name='gifStory']").value


        
       
        const userId = parseInt(localStorage.getItem("gg_user"))
        

        const dataToSendToAPI = {
            title: usergifTitle,
            imageURL: usergifURL,
            description: usergifStory,
            userId: userId,
            timestamp: new Date()
        }
        sendGif(dataToSendToAPI)
    }
})

