import { createMessageForm } from "../message/MessageForm.js"
import { receivedMessages } from "../friends/DirectMessage.js"
import { getMessages } from "../data/provider.js"

const newMessagesCount = () => {
    const messagesArray = getMessages()
    const userId = parseInt(localStorage.getItem("gg_user"))
    const inbox = []

    for (let i = 0; i < messagesArray.length; i++) {
        if (messagesArray[i].recipientId === userId && messagesArray[i].read === false) {
            inbox.push(messagesArray[i])
        }
    }
    return inbox.length
}

export const NavBar = () => {
    return `
    <nav class="navigation">
    <div> <img id="pbImage" src="../images/pb.png"> </div>
    <article id="giffyLogo">Giffygram</article>
    <div class="flexRight">
    <div> <img id="penImage" src="../images/fountain-pen.svg"> </div>
    <div> <button id="messageBox">Inbox (${newMessagesCount()})</button> </div>
    <button id="logout_button">Logout</button>
    </div>
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
        document.querySelector(".DMBox").innerHTML = receivedMessages()
    }
})