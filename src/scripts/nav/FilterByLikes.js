import {getUsers, getPosts, getLikes} from "../data/provider.js"

export const filterByLikes= (userID) => {
    
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

    const likesInfo = likes.filter(like => {
        return (userId === like.userId)
    })

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
            const findFavorite = likesInfo.find(postLike => {
                return (postLike.postId === post.id)
            })
            const starImage = (findFavorite === undefined ? './images/favorite-star-blank.svg' : './images/favorite-star-yellow.svg')
            const altText = (findFavorite === undefined ? 'blank star' : 'yellow star')
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