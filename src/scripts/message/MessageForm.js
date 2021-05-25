import { getUsers, sendMessageToDatabase } from "../data/provider.js"

// input form for recipientId and text
export const createMessageForm = () => {
    return `
        <div class="messageBoxinner">
            <div class="MessageTopflex">
            <h1>Send DM</h1>
            <button id="closeMessageWindow">Close</button>
            </div>
            <div class="MessageBottomFlex">
            <select id="recipientSelection">
                ${recipientSelectionList()}
            </select>
            <div class="field">
                <input type="text" name="messageText" class="textBodyInput" placeholder="Message body"/>
            </div>
            </div>
            <button id="sendMessage">Send</button>
        </div>
    `
}

export const messageBox = () => {
    return `<div class="messageBox"></div>`
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeMessageWindow") {
        document.querySelector(".messageBox").innerHTML = messageBox()
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendMessage") {
        const recipientId = parseInt(document.querySelector("#recipientSelection").value)
        const textBody = document.querySelector(".textBodyInput").value
        const userId = parseInt(localStorage.getItem("gg_user"))

        if (textBody === "") {
            document.querySelector(".textBodyInput").style.background = "#fc7878"
            alert("Please add a message!")
            return
        }

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