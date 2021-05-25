import {getUsers, getPosts, getLikes} from "../data/provider.js"

export const filterByLikes= () => {
    
    const posts = getPosts()
    const likes = getLikes()
    const filteredLikes = []
    const filteredPosts = []

    const userId = parseInt(localStorage.getItem("gg_user"))
    
    for (let i = 0; i < likes.length; i++) {
        if (likes[i].userId === userId) {
            filteredLikes.push(likes[i])
        }
    }
    for (let i = 0; i < likes.length; i++) {
        for(let n = 0; n < posts.length; n++) {
            if (likes[i].postId === posts[n].id) {
                filteredPosts.push(posts[n])
            }
        }
    }

    const usersArray = getUsers()
    let html = "<div id='postingWall'>"
    html += `
    ${filteredPosts.map(
        post => {
            let posterName = "..."
            for (let i = 0; i < usersArray.length; i++) {
                if (post.userId === usersArray[i].id) {
                    posterName = usersArray[i].name
                }
            }
            const postDate = (new Date(post.timestamp)).toLocaleDateString('en-US')
            const starImage = './images/favorite-star-yellow.svg'
            const altText = 'yellow star'


            return `
                <h2>${post.title}</h2>
                <img src="${post.imageURL}">
                <div> ${post.description} </div>
                <div> Posted by ${posterName} on ${postDate} </div>
                <img class="actionIcon" id="favoritePost--${post.id}" src=${starImage} alt=${altText} />
                `
            }
        ).join("\n")}
    `
    html += "</div>"
    return html
}