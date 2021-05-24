import { getUsers } from "../data/provider.js"
import { filterWallByYear } from "../nav/FilterByYear.js"

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


// TODO: display poster name and date
// for (let i = 0; i < users.length; i++) {
//     if (users[i].id === userId) {
//         userName = users[i].name
//     }
// }
// const users = getUsers()

// const displayPoster = (postId) => {
    
    
//     return `
//     <div>
//     `
// }

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
            <option id="year17" name='footerYear'>2017</option>
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
