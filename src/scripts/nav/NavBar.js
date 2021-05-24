import { createMessageForm } from "../message/MessageForm.js"
import { receivedMessages } from "../friends/DirectMessage.js"

export const NavBar = () => {
    return `
    <nav class="navigation">
    <article>Giffygram</article>
    <div> <img id="penImage" src="../images/fountain-pen.svg"> </div>
    <div> <button id="messageBox">DMs</button> </div>
    <button id="logout_button">Logout</button>
    </nav>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout_button") {
        localStorage.clear()
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "penImage") {
        document.querySelector(".messageBox").innerHTML = createMessageForm()
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "messageBox") {
        document.querySelector(".messageBox").innerHTML = receivedMessages()
    }
})