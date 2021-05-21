import { getUsers } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")


//change eventlistener for the post since section
mainContainer.addEventListener(
    "change",
    (event) => {
        //add details after target/ .name cant be the correct target.
        if (event.target.name === "") {
            //add the set export to this
            }
        }
    )

    //change change eventlistener for post by section
    mainContainer.addEventListener(
        "change",
        (event) => {
            if(event.target.name === "") {
                //add the set export to this
            }
        }
    )

    // change eventListener for show only favorites section
    mainContainer.addEventListener(
        "change",
        (event) => {
            if(event.target.name === "") {
            }
        }
    )
//will we have to make a year section in provider.js?
//function for since year html need a .map to filter through years.
//function for html of post by user need a .map to filter through names of users.
//put flexbox on each input to make them look like a footer
export const footer = () => {
    return`
    <section class="Footer">
    <footer class="footer">
    <div class="yearSelect flexboxFooter footer__item">
    <p>Posts since</p>
    <select value="">
            <option value=“2021”>2021</option>
            <option value=“2020”>2020</option>
            <option value=“2019”>2019</option>
            <option value=“2018”>2018</option>
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
            <option id="${user.id}">${user.name}</option>
            `
        }
    )}
    </select>`
}

const footerFavorites = () => {
    //need a const something
    //input id needs to be defined
    return `
    <input id="" type="checkbox">
    `
}
