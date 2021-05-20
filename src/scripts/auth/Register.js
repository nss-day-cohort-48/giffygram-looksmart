

export const registrationForm = () => {
    return `
        <div>
            <div>
            Not a member?
            </div>
        <button id="registrationButton>Register here!</button>
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
    
}