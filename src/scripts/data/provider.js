const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


let applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },

    users: [],
    posts: [],
    likes: [],
    messages: [],
    follows: []
}


export const fetchPosts = () => {
    return fetch("${API}/posts")
    .then(response => response.json())
    .then(posts =>{
        applicationState.posts = posts
    })
}

export const getPosts = () => {
    return [...applicationState.posts]
}


export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
    .then(response => response.json())
    .then(
        (user) => {
            applicationState.users = user
        }
    )
}


export const getUsers = () => {
    return [...applicationState.users]
}

export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
    .then(response => response.json())
    .then(
        (message) => {
            applicationState.messages = message
        }
    )
}
export const getMessages = () => {
    return[...applicationState.messages]
}