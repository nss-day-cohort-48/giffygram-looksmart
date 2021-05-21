import { getPosts, getUsers } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")

export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()

    let html = "<ul>"

    const listPosts = posts.map(
        post => {

            let newDate = post.timestamp;
            let upDate = new Date(newDate).toLocaleDateString(`en-US`);


            
            return ` <li> <h2> ${post.title} </h2></li>            
            <li> <img src=" ${post.imageURL}"> </li>
            <li> <div> ${post.description}</div> </li>
            ${users.map(user => {
                if (user.id === post.userId) {
                    return `<li> <div> Posted by ${user.name} on ${upDate} </div></li>`
                }
            }).join("")
        }
        <li> <img class="actionIcon" id="favoritePost" src="./images/favorite-star-blank.svg" alt="blanl-favorite-star" /></li>
        `
        })

html += listPosts.join("")
html += "</ul>"

return html
}

/*const actionIcon = document.querySelector(".actionIcon")

actionIcon.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "favoritePost") {
        toggleLike(clickEvent);
   }
   else function toggleLike(ele) {
      ele.target.classList.toggle("fa-thumbs-down");
   }
})
    */