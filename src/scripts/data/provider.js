const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


let applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
}




export const getUsers = () => {
    return [...applicationState.users]
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


export const fetchLikes = () => {
    return fetch(`${API}/likes`)
    .then(response => response.json())
    .then(likes =>{
        applicationState.likes = likes
    })
}

export const getlikes = () => {
    return [...applicationState.likes]
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

export const fetchFollows = () => {
    return fetch(`${apiURL}/follows`)
    .then(response => response.json())
    .then(
        (follow) => {
            applicationState.follows = follow
        }
    )
}

export const getFollows = () => {
    return[...applicationState.follows]
}