import { getUsers, sendUserToDatabase } from "../data/provider.js"
import { GiffyGram } from "../GiffyGram.js"

export const registrationForm = () => {
    return `
        <div>
            <div>
            Not a member?
            </div>

            <button id="registrationButton">Register here!</button>

        </div>
    `
}

// Event listener to listen for click event on registration button
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registrationButton") {
        // re-render innerHTML of document.querySelector(".giffygram")
        document.querySelector(".giffygram").innerHTML = registerMe()
    }
})

// HTML-producing component of registration events
const registerMe = () => {
    return `
    <div class="registrationForm">
    <form>
        <fieldset>
            <label for="name">Full Name:</label>
            <input type="text" class="name_input" name="fullname" autofocus placeholder="Full name" />
        </fieldset>
        <fieldset>
            <label for="email">Email:</label>
            <input type="text" class="email_input" name="email" autofocus placeholder="Email address" />
        </fieldset>
        <fieldset>
            <label for="password">Create Password:</label>
            <input type="password" class="password_input" name="password" placeholder="Create Password" />
        </fieldset>
    </form>
    <button id="registerMe">Register me!</button>
</div>
    `
}

// event listener for button click; stores new user info with unique id in database
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerMe") {
        const userName = document.querySelector("input[name='fullname']").value
        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        // check to see whether user input data

        if (userName === "") {
            const inputField = document.querySelector(".name_input")
            inputField.style.background = "#fc7878"
            alert("Please input data in all fields")
            return
        }

        if (email === "") {
            const inputField = document.querySelector(".email_input")
            inputField.style.background = "#fc7878"
            alert("Please input data in all fields")
            return
        }

        if (password === "") {
            const inputField = document.querySelector(".password_input")
            inputField.style.background = "#fc7878"
            alert("Please input data in all fields")
            return
        }

        // check to see whether an account with these credentials already exists in database

        const usersArray = getUsers()

        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].name === userName || usersArray[i].email === email) {
                alert("User with this name and/or email already exists in database")
                document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
                return
            } 
        }

        const newUserId = usersArray.length + 1
        
        let newUser = {
        "name": userName,
        "email": email,
        "password": password,
        "id": newUserId
        }

        sendUserToDatabase(newUser)
        alert("Congratulations for signing up! Please log in.")
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        return
    }
})