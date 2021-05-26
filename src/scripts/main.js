  
import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchPosts, fetchUsers, fetchLikes, fetchMessages } from "./data/provider.js"
import { receivedMessages } from "./friends/DirectMessage.js"


const applicationElement = document.querySelector(".giffygram")

// this is the main rendering function, which fetches from API, then shows either login form or the main site
// before it renders, it checks whether a userId is saved in localStorage (lines 15 and 16 etc)
export const renderApp = () => {
    fetchUsers().then(fetchPosts).then(fetchMessages).then(fetchLikes).then(
        () => {
        const user = parseInt(localStorage.getItem("gg_user"))
        if (user) {
            applicationElement.innerHTML = GiffyGram()
        } else {
            applicationElement.innerHTML = LoginForm()
        }}
    )
}

renderApp()

applicationElement.addEventListener(
    "stateChanged",
    CustomEvent => {
        renderApp()
    }
)

// secondary event listener for CustomEvent2, which re-renders app with DM box showing
applicationElement.addEventListener(
    "stateChanged2",
    CustomEvent => {
        fetchUsers().then(fetchPosts).then(fetchLikes).then(fetchMessages).then(
            () => {
        applicationElement.innerHTML = GiffyGram()
        document.querySelector(".DMBox").innerHTML = receivedMessages()
        })}
)