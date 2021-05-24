import { getMessages, getUsers, deleteMessage } from "../data/provider.js"

export const messageBox = () => {
    return `<div class="messageBox">
            </div>
    `
}

export const receivedMessages = () => {
    const messagesArray = getMessages()
    const userId = parseInt(localStorage.getItem("gg_user"))
    const inbox = []

    for (let i = 0; i < messagesArray.length; i++) {
        if (messagesArray[i].recipientId === userId) {
            inbox.push(messagesArray[i])
        }
    }
    
    return `<div> 
    <h1>Your DMs</h1>
    <ul>
    ${inbox.map(inboxList).join("\n")}
    </ul>

    <button id="closeMessageBox">Close</button>
    <div>
    `
}

const inboxList = (message) => {
    const usersArray = getUsers()

    let senderName = "..."

    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].id === message.userId) {
            senderName = usersArray[i].name
        }
    }

    return `
    <div>${senderName}: ${message.text}
    <button id="deleteMessage--${message.id}">delete</button>
    </div>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeMessageBox") {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteMessage--")) {
        const [, messageId] = clickEvent.target.id.split("--")
        deleteMessage(parseInt(messageId))
    }
})