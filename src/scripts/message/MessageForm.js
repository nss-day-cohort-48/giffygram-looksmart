import { getUsers, sendMessageToDatabase } from "../data/provider.js"

// input form for recipientId and text
export const createMessageForm = () => {
    return `
        <div class="messageBox">
            <select id="recipientSelection">
                ${recipientSelectionList()}
            </select>
            <div class="field">
                <input type="text" name="messageText" class="textBodyInput" placeholder="Message body"/>
            </div>
            <button id="sendMessage">Send</button>
            <button id="closeMessageWindow">Close</button>
        </div>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeMessageWindow") {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendMessage") {
        const recipientId = parseInt(document.querySelector("#recipientSelection").value)
        const textBody = document.querySelector(".textBodyInput").value
        const userId = parseInt(localStorage.getItem("gg_user"))

        const messageObject = {
            userId: userId,
            text: textBody,
            recipientId: recipientId,
            read: false
        }
        sendMessageToDatabase(messageObject)
    }
})



const recipientSelectionList = () => {
    const usersArray = getUsers()
    return `
        ${usersArray.map(usersList).join("\n")}
    `
}

const usersList = (user) => {
    return `<option value="${user.id}">${user.name}</option>`
}