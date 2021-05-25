import {getUsers, getPosts, getLikes} from "../data/provider.js"

export const footerFavorites = () => {
    //new code
    const posts = getPosts()
    const likes = getLikes()
    const filteredPosts = []

    for (let i = 0; i < posts.length; i++) {
        for (let n = 0; n < likes.length; n++) {
            if ()
        }
    }
    //end of new code
    return `
    <input id="favoritesInFooter" type="checkbox">
    `
}