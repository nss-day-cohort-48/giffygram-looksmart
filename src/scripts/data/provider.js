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
    messages: []
}


// fetch call to access USER database in API
export const fetchUsers = () => {
    return fetch (`${apiURL}/users`)
    .then(response => response.json())
    .then(users =>{
        applicationState.users = users
    })
}


export const getUsers = () => {
    return [...applicationState.users]
}

export const setUser = (user) => {
    applicationState.currentUser.id = user.id
    applicationState.currentUser.name = user.name
    applicationState.currentUser.email = user.email
}
// post call to add new user to database
export const sendUserToDatabase = (newUser) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }
    return fetch(`${apiURL}/users`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    })
}



export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
    .then(response => response.json())
    .then(posts =>{
        applicationState.posts = posts
    })
}

export const getPosts = () => {
    return [...applicationState.posts]
}


export const fetchLikes = () => {

    return fetch(`${apiURL}/likes`)

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
