import { getPosts, getUsers, sendFavorite, getLikes } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")

export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()
    const likes = getLikes()

    const likesInfo = likes.filter(like => {
        return (parseInt(localStorage.getItem("gg_user")) === like.userId)
         
    }    )

    let html = "<ul>"

    const listPosts = posts.map(
        post => {

            let newDate = post.timestamp;
            let upDate = new Date(newDate).toLocaleDateString(`en-US`);

            const findFavorite = likesInfo.find(postLike => {
                
                return (postLike.postId === post.id)
            })

            const starImage = (findFavorite === undefined ? './images/favorite-star-blank.svg' : './images/favorite-star-yellow.svg')
            const altText = (findFavorite === undefined ? 'blank star' : 'yellow star')
            

            return ` <li> <h2> ${post.title} </h2></li>            
            <li> <img src=" ${post.imageURL}"> </li>
            <li> <div> ${post.description}</div> </li>
            ${users.map(user => {
                if (user.id === post.userId) {
                    return `<li> <div> Posted by ${user.name} on ${upDate} </div></li>`
                }
            }).join("")
        }
        <li> <img class="actionIcon" id="favoritePost--${post.id}" src=${starImage} alt=${altText} /></li>
        `
        })

html += listPosts.join("")
html += "</ul>"

return html
}

//const actionIcon = document.querySelector(".actionIcon")


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("favoritePost--")) {
        
        const [, postId] = clickEvent.target.id.split("--")
        const newFavorite = {
            
            postId: parseInt(postId),
            userId: parseInt(localStorage.getItem("gg_user"))
        }
        sendFavorite(newFavorite)
        alert(`Added to your Favorites`)
    }
        
        


        
})

    