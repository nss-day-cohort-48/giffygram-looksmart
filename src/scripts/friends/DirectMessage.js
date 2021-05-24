import { getMessages } from "../data/provider.js"

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
        if (messagesArray[i].userId === userId) {
            inbox.push(messagesArray[i])
        }
    }
    
    return `<h1>Your DMs</h1>
        ${inboxList()}        
    `
}

const inboxList = () => {
    return `<ul>
    <li>Message</li>
    </ul>
    `
}