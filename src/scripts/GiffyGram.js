import { NavBar } from "./nav/NavBar.js"
import { PostList } from "../scripts/feed/PostList.js"
import { footer } from "../scripts/nav/Footer.js"
import { postButton } from "./feed/Post.js"
import { DMBox } from "./friends/DirectMessage.js"
import { messageBox } from "./message/MessageForm.js"



export const GiffyGram = () => {
    return `
    ${NavBar()}
    <section class="topFlex">
    ${postButton()}
    ${messageBox()}
    ${DMBox()}
    </section>
    
    <section>
    ${PostList()}
    </section>

    <section class="Footer">
    ${footer()}
    </section>
    `
}