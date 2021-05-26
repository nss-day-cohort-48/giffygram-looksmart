  
import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchPosts, fetchUsers, fetchLikes, fetchMessages } from "./data/provider.js"
import { receivedMessages } from "./friends/DirectMessage.js"


const applicationElement = document.querySelector(".giffygram")

// this is the main rendering function, which fetches from API, then shows either login form or the main site
// before rendering, it checks whether a userId is saved in localStorage; if one is, it logs you in; else, it displays the login form
export const renderApp = () => {
    fetchUsers().then(fetchPosts).then(fetchMessages).then(fetchLikes).then(
        () => {
        const user = parseInt(localStorage.getItem("gg_user"))
        if (user) {
            document.querySelector(".giffygram").innerHTML = GiffyGram()
        } else {
            document.querySelector(".giffygram").innerHTML = LoginForm()
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

// secondary event listener, which re-renders the site and then shows the DM box
applicationElement.addEventListener(
    "stateChanged2",
    CustomEvent => {
        fetchUsers().then(fetchPosts).then(fetchLikes).then(fetchMessages).then(
            () => {
        applicationElement.innerHTML = GiffyGram()
        document.querySelector(".DMBox").innerHTML = receivedMessages()
        })}
)