import { getPosts } from "../data/provider.js"



export const PostList = () => {
    const posts = getPosts()
    let html = "<ul>"

    const listPosts = posts.map(
        post => {
            return `<li> <h2 class="gif__postTitle">${post.title}</h2> ${post.imageURL} <h5>${post.description}</h5></li>`
        })

html += listPosts.join("")
html += "</ul>"

return html
}