import { getPosts, getUsers, sendFavorite, getLikes, favoriteDeleteRequest, deletePost } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")

export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()
    const likes = getLikes()

    /*iterate the 'likes' array and, using filter, returns
    a new array, just including the likes for the
    current user.*/
    const userLikes = likes.filter(like => {
        return (parseInt(localStorage.getItem("gg_user")) === like.userId)

    })


    let html = "<div id='postingWall'>"


    const listPosts = posts.map(
        post => {

            let newDate = post.timestamp;
            let upDate = new Date(newDate).toLocaleDateString(`en-US`);

            /*Iterate through the entire userLikes array using the find method to see if the
            postId is equal the id of the first object of the post array we're currently mapping. 
            This will return the object from the userLikes array where postId === post.id of the mapped
            posts array, but we don't care about that in thise case. If no object is found that matches,
            find will return undefined, which is what we need. */
            const findFavorite = userLikes.find(likedPost => {
                return (likedPost.postId === post.id)
            })



            /*if the postId of the user's likes != post.id, then display a blank star on the 
            homepage, otherwise the user has already liked it so display a gold star*/
            const starImage = (findFavorite === undefined ? './images/favorite-star-blank.svg' : './images/favorite-star-yellow.svg')
            const altText = (findFavorite === undefined ? 'blank star' : 'yellow star')
            
            
            /*for each post in the posts array(what we are mapping), return HTML to display 
            it's title, image, and description, as well as post details.*/
            return `  <h2> ${post.title} </h2>            
             <img src=" ${post.imageURL}"> 
             <div> ${post.description}</div> 
            ${users.map(user => {
                if (user.id === post.userId) {
                    return `<div> Posted by ${user.name} on ${upDate} </div>`
                }
            }).join("")}
         <img class="actionIcon" id="favoritePost--${post.id}" src=${starImage} alt=${altText} />
         ${deleteIcon(post)}
        `
        })


    html += listPosts.join("")
    html += "</div>"

    return html
}

const deleteIcon = (post) => {
    if (post.userId === parseInt(localStorage.getItem("gg_user"))) {
        return `<img class="actionIcon" id="deletePost--${post.id}" src="./images/block.svg"  alt="Delete Icon"/>`
    } else return `<br></br>`
}


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("favoritePost--")) {

        const [, postId] = clickEvent.target.id.split("--")
        const postID = parseInt(postId)
        const userId = parseInt(localStorage.getItem("gg_user"))
        const likesArray = getLikes()


        // this catches to see whether post is already liked;
        // if it is, the clickEvent deletes the like
        for (let i = 0; i < likesArray.length; i++) {
            if (likesArray[i].postId === postID && likesArray[i].userId === userId) {
                const likeId = likesArray[i].id

                favoriteDeleteRequest(likeId)
                document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
                return
            }
        }

        // creates temporary favorite object, then sends it to API
        const newFavorite = {
            postId: postID,
            userId: userId
        }
        sendFavorite(newFavorite)
    }
})

// clickEvent to delete a post
mainContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deletePost--")) {
      const [, postId] = clickEvent.target.id.split("--")  
        deletePost(parseInt(postId))
    }
})