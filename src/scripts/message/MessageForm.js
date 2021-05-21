import { getUsers, sendMessageToDatabase } from "../data/provider.js"

// input form for recipientId and text
export const createMessageForm = () => {
    return `
        <div class="createMessage">
            <button id="closeMessageWindow">Close</button>
            <select id="recipientSelection">
                ${recipientSelectionList()}
            </select>
            <div class="field">
                <input type="text" name="messageText" class="textBodyInput" placeholder="Message body"/>
            </div>
            <button id="sendMessage">Send</button>
            <button id="cancelMessage">Cancel</button>
        </div>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeMessageWindow") {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})

// document.addEventListener("change", changeEvent => {
//     let recipientId = 0
    
//     if (changeEvent.target.id === "recipientSelection") {
//         recipientId = changeEvent.target.value
//         alert(`${recipientId}`)
//     }
// })

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