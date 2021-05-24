import { NavBar } from "./nav/NavBar.js"
import { PostList } from "../scripts/feed/PostList.js"
import { footer } from "../scripts/nav/Footer.js"
import { postButton } from "./feed/Post.js"
import { messageBox } from "./friends/DirectMessage.js"


export const GiffyGram = () => {

    // Show main main UI
    return `
    
    ${NavBar()}
    <section class="topFlex">
    ${postButton()}
    ${messageBox()}
    </section>
    <section>
    ${PostList()}
    </section>

    <section class="Footer">
    ${footer()}
    </section>
    `
}
