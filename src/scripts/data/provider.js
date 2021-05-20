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
    return fetch("${API}/likes")
    .then(response => response.json())
    .then(likes =>{
        applicationState.likes = likes
    })
}

export const getlikes = () => {
    return [...applicationState.likes]
}