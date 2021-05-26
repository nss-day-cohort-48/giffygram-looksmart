import { createMessageForm } from "../message/MessageForm.js"
import { receivedMessages } from "../friends/DirectMessage.js"
import { getMessages } from "../data/provider.js"

// Counter for new messages display
const newMessagesCount = () => {
    const messagesArray = getMessages()
    const userId = parseInt(localStorage.getItem("gg_user"))
    let inboxCount = 0

    // equivalent loop to below
    // iterates through the messagesArray and checks the recipientId and read properties
    // for (let i = 0; i < messagesArray.length; i++) {
    //     if (messagesArray[i].recipientId === userId && messagesArray[i].read === false) {
    //         inboxCount++
    //     }
    // }

    for (const message of messagesArray) {
        if (message.recipientId === userId && message.read === false) {
            inboxCount++
        }
    }
    return inboxCount
}

// HTML rendering function for the navigation bar at top
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

// event listeners for click events on nav bar

// logs user out by clearing userId from local storage and re-rendering
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout_button") {
        localStorage.clear()
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})

// refreshes the page if you click on the peanut butter jar
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "pbImage") {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})

// reveals the send message form
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "penImage") {
        document.querySelector(".messageBox").innerHTML = createMessageForm()
    }
})

// click event to open DM box
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "messageBox") {
        document.querySelector(".DMBox").innerHTML = receivedMessages()
    }
})
