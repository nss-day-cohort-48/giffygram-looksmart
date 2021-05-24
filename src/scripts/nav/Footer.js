import { getUsers, getPosts } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")


//change eventlistener for the post since section
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "yearsDropdown") {
            const postYearId = event.target.value
            alert(`${postYearId}`)
        }
    }
)
//Now get years and how would we go about this? somehow filter through time and grab certain ones.
// const yearFunction = () => {
//     const yearArray = getPosts()
//     return `
//             ${yearArray.map().join("")}`
// }

//change change eventlistener for post by section
//same thing as above but for users not years
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "footerNames") {
            
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
    <select id="years" name="yearsDropdown"value="">
            <option id="year21" name='footerYear' value=“2021”>2021</option>
            <option id="year20" name='footerYear' value=“2020”>2020</option>
            <option id="year19" name='footerYear' value=“2019”>2019</option>
            <option id="year18" name='footerYear' value=“2018”>2018</option>
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
    <select>
    ${users.map(
        user => {
            return `
            <section id="footerNames">
            <option id=" userInFooter ${user.id}">${user.name}</option>
            </section>
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
