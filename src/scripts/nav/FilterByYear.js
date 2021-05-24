import {getPosts, getLikes} from "../data/provider.js"

export const filterWallByYear = (postingYear) => {
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
            
            const findFavorite = likesInfo.find(postLike => {
                        
                return (postLike.postId === post.id)
            })
            const starImage = (findFavorite === undefined ? './images/favorite-star-blank.svg' : './images/favorite-star-yellow.svg')
            const altText = (findFavorite === undefined ? 'blank star' : 'yellow star')
            return `
                <h2>${post.title}</h2>
                <img src="${post.imageURL}">
                <div> ${post.description} </div>
                
                <img class="actionIcon" id="favoritePost--${post.id}" src=${starImage} alt=${altText} />
                `
            }
        ).join("\n")}
    `

    html += "</div>"
    return html
}