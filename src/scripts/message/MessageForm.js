import { getUsers } from "../data/provider.js"

// input form for recipientId and text
export const createMessageForm = () => {
    return `
        <div class="createMessage">
            <button id="closeMessageWindow">Close</button>
            <select name="recipientSelection">
                ${recipientSelectionList()}
            </select>
            <div class="field">
                <input type="text" name="messageText" class="input" placeholder="Message body"/>
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

document.addEventListener("change", changeEvent => {
    if (changeEvent.target.name === "recipientSelection") {
        const recipientId = changeEvent.target.value
        alert(`${recipientId}`)
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