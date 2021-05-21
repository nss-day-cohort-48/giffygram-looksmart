import { PostEntry } from "./PostEntry.js"

export const postButton = () => {
    return `
    <div class="newPost">
    <button id="postButton">GiffyPost</button>
    </div>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "postButton") {
        document.querySelector(".newPost").innerHTML = PostEntry()
    }
})