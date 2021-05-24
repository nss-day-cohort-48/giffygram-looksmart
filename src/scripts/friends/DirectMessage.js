import { getMessages, getUsers, deleteMessage, markMessageAsRead } from "../data/provider.js"

export const DMBox = () => {
    return `<div class="DMBox"></div>`
}


// TODO: add read messages list filter
export const receivedMessages = () => {
    const messagesArray = getMessages()
    const userId = parseInt(localStorage.getItem("gg_user"))
    const inbox = []
    const readInbox = []

    for (let i = 0; i < messagesArray.length; i++) {
        if (messagesArray[i].recipientId === userId && messagesArray[i].read === false) {
            inbox.push(messagesArray[i])
        }
    }
    
    for (let i = 0; i < messagesArray.length; i++) {
        if (messagesArray[i].recipientId === userId && messagesArray[i].read === true) {
            readInbox.push(messagesArray[i])
        }
    }

    return `<div class="DMDisplay"> 
    <div class="DMTopflex">
    <h1>Your DMs</h1>
    <button id="closeMessageBox">Close</button>
    </div>
    <div class="inbox">inbox
    ${inbox.map(inboxList).join("\n")}
    </div>
    <div class="readInbox">read messages
    ${readInbox.map(readList).join("\n")}
    </div>
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
    <div class="unreadMessage">${senderName}: ${message.text}
    <button id="markAsRead--${message.id}">mark as read</button>
    <button id="deleteMessage--${message.id}">delete</button>
    </div>
    `
}

const readList = (message) => {
    const usersArray = getUsers()

    let senderName = "..."

    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].id === message.userId) {
            senderName = usersArray[i].name
        }
    }

    return `
    <div class="readMessage">${senderName}: ${message.text}
    <button id="deleteMessage--${message.id}">delete</button>
    </div>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeMessageBox") {
        document.querySelector(".DMBox").innerHTML = DMBox()
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("markAsRead--")) {
        const [, messageId] = clickEvent.target.id.split("--")
        markMessageAsRead(parseInt(messageId))
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteMessage--")) {
        const [, messageId] = clickEvent.target.id.split("--")
        deleteMessage(parseInt(messageId))
    }
})