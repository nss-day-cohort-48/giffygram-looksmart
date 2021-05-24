import { getUsers, getPosts, getLikes } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")


//change eventlistener for the post since section
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "yearsDropdown") {
            const postingYear = parseInt(event.target.value)
            document.querySelector("#postingWall").innerHTML = filterWallByYear(postingYear)
        }
    }
)

const filterWallByYear = (postingYear) => {
    const posts = getPosts()
    const filteredPosts = []

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].timestamp === postingYear) {
            filteredPosts.push(posts[i])
        }
    }

    const likes = getLikes()
    const likesInfo = likes.filter(like => {
        return (parseInt(localStorage.getItem("gg_user")) === like.userId)
    })

    let html = "<div>"
    filteredPosts.map(
        post => {

            const findFavorite = likesInfo.find(postLike => {

                return (postLike.postId === post.id)
            })

            const starImage = (findFavorite === undefined ? './images/favorite-star-blank.svg' : './images/favorite-star-yellow.svg')
            const altText = (findFavorite === undefined ? 'blank star' : 'yellow star')


            return `<h2> ${post.title} </h2>           
            <img src=" ${post.imageURL}">
            <div> ${post.description}</div>
            <img class="actionIcon" id="favoritePost--${post.id}" src=${starImage} alt=${altText} />
        `
        }
    )
    html += filteredPosts.join("")
    html += "</div>"

    return html
}

// event listener for user filter dropdown
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "footerNames") {
            const userId = parseInt(event.target.value)
            alert(`${userId}`)
        }
    }
)

// click eventListener for show only favorites section
mainContainer.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "favoritesInFooter") {
            alert("Hello World!!!")
        }
    }
)

export const footer = () => {
    return `
    <section class="Footer">
    <footer class="footer">
    <div class="yearSelect flexboxFooter footer__item">
    <p>Post since</p>
    <select id="years" name="yearsDropdown">
            <option id="year21" name='footerYear'>2021</option>
            <option id="year20" name='footerYear'>2020</option>
            <option id="year19" name='footerYear'>2019</option>
            <option id="year18" name='footerYear'>2018</option>
    </select>
    </div>

    <div class="usersInFooter footer__item">
    <p>Posts by user</p>
    ${footerUsers()}
    </div>

    <div class="footerFavorites footer__item">
    <p class="favoritesText">Show only favorites</p>
    ${footerFavorites()}
    </div>
    </footer>
    </section>
            `
}

const footerUsers = () => {
    const users = getUsers()
    return `
    <select name="footerNames">
    ${users.map(
        user => {
            return `
            <option value="${user.id}">${user.name}</option>
            `
        }
    )}
    </select>`
}

const footerFavorites = () => {
    //need a const something
    return `
    <input id="favoritesInFooter" type="checkbox">
    `
}
