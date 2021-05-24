import {getPosts, getLikes, getUsers} from "../data/provider.js"

export const filterWallByYear = (postingYear) => {
    const users = getUsers()
    const posts = getPosts()
    const filteredPosts = []

    for (let i = 0; i < posts.length; i++) {

        let newDate = new Date(posts[i].timestamp).toLocaleDateString(`en-US`)

        const [,,postYear] = newDate.split("/")
        const postDateYear = parseInt(postYear)

        if (postDateYear === postingYear) {
            filteredPosts.push(posts[i])
        }
    }

    const userId = parseInt(localStorage.getItem("gg_user"))
    const likes = getLikes()



    const likesInfo = likes.filter(like => {
        return (userId === like.userId)
    })
    
    let html = "<div id='postingWall'>"
    
    html += `
    ${filteredPosts.map(
        post => {
            
            let posterName = "..."
            for (let i = 0; i < users.length; i++) {
                if (post.userId === users[i].id) {
                    posterName = users[i].name
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
                <div>Posted by ${posterName} on ${postDate}
                
                <img class="actionIcon" id="favoritePost--${post.id}" src=${starImage} alt=${altText} />
                `
            }
        ).join("\n")}
    `

    html += "</div>"
    return html
}