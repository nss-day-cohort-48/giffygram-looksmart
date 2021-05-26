import { getUsers, sendMessageToDatabase } from "../data/provider.js"

// empty HTML string to work off of for message-sending component
export const messageBox = () => {
    return `<div class="messageBox"></div>`
}

// input form for recipientId and text
// this appears on clickEvent through document.queryselector().innerHTML method
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

// creates recipient dropdown list, passes in usersList function to create each dropdown menu item
const recipientSelectionList = () => {
    const usersArray = getUsers()
    return `
        ${usersArray.map(usersList).join("\n")}
    `
}
const usersList = (user) => {
    return `<option value="${user.id}">${user.name}</option>`
}

// event listener to close message box
// returns innerHTML to base state to clear
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeMessageWindow") {
        document.querySelector(".messageBox").innerHTML = messageBox()
    }
})

// sends message data to API
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendMessage") {
        const recipientId = parseInt(document.querySelector("#recipientSelection").value)
        const textBody = document.querySelector(".textBodyInput").value
        const userId = parseInt(localStorage.getItem("gg_user"))
        
        // checks whether message form is blank
        // turns background color red if it is
        if (textBody === "") {
            document.querySelector(".textBodyInput").style.background = "#fc7878"
            return
        }
        // sends user object to API
        const messageObject = {
            userId: userId,
            text: textBody,
            recipientId: recipientId,
            read: false
        }
        sendMessageToDatabase(messageObject)
    }
})
