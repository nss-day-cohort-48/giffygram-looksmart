import { getPosts, getUsers, sendFavorite, getLikes, favoriteDeleteRequest } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")

export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()
    const likes = getLikes()

    /*iterate the 'likes' array and returns
    a new array just including that likes for the
    current user*/
    const likesInfo = likes.filter(like => {
        return (parseInt(localStorage.getItem("gg_user")) === like.userId)

    })


    let html = "<div id='postingWall'>"


    const listPosts = posts.map(
        post => {

            let newDate = post.timestamp;
            let upDate = new Date(newDate).toLocaleDateString(`en-US`);

            /*return the value of the first element in likesInfo array
            where the postId of the current user favorites is equal to the id 
            of the individual post*/
            const findFavorite = likesInfo.find(postLike => {

                return (postLike.postId === post.id)
            })
            /*if the postId of the user favorites != post.id, then display a blank star on the 
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
                    return ` <div> Posted by ${user.name} on ${upDate} </div>`
                }
            }).join("")
                }
         <img class="actionIcon" id="favoritePost--${post.id}" src=${starImage} alt=${altText} />
        `
        })


    html += listPosts.join("")
    html += "</div>"

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

        //alert(`Added to your Favorites`)
    }
})








/*eventListener to remove post from favorites
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("favoritePost--")) {

        const [, postId] = clickEvent.target.id.split("--")

        favoriteDeleteRequest(parseInt(postId))
    }

})

*/