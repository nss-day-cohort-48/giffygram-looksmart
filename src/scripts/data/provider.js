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

// fetch call to access USER databse in API
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

// fetch call to access POSTS database in the API
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
