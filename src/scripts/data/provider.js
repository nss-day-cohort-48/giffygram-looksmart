const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
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