

const mainContainer = document.querySelector(".giffygram")


//change eventlistener for the post since section
mainContainer.addEventListener(
    "change",
    (event) => {
        //add details after target/ .name cant be the correct target.
        if (event.target.name === "") {
            //add the set export to this
            set(parseInt(event.target.value))
            }
        }
    )

    //change change eventlistener for post by section
    mainContainer.addEventListener(
        "change",
        (event) => {
            if(event.target.name === "") {
                //add the set export to this
                set(parseInt(event.target.value))
            }
        }
    )

    // change eventListener for show only favorites section
    mainContainer.addEventListener(
        "change",
        (event) => {
            if(event.target.name === "") {
                // add the set export to this 
                set(parseInt(event.target.value))
            }
        }
    )
//will we have to make a year section in provider.js?
//function for since year html need a .map to filter through years.
//function for html of post by user need a .map to filter through names of users.
//put flexbox on each input to make them look like a footer
export const footer = () => {
    const 
}

