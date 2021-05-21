export const NavBar = () => {
    return `
    <nav class="navigation">
    
    <div>Giffygram</div>

    <button id="logout_button">Logout</button>

    </nav>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout_button") {
        localStorage.clear()
        alert("logging you out...")
        
        // set up event listener to refresh to main, i.e. login page
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})
