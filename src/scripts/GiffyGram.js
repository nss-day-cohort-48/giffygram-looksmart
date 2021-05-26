import { NavBar } from "./nav/NavBar.js"
import { PostList } from "../scripts/feed/PostList.js"
import { footer } from "../scripts/nav/Footer.js"
import { postButton } from "./feed/Post.js"
import { DMBox } from "./friends/DirectMessage.js"
import { messageBox } from "./message/MessageForm.js"

// main HTML rendering function, displays most components
export const GiffyGram = () => {
    return `
    ${NavBar()}
    <section class="mainflex">
    <div class="postingWall">
    ${postButton()}
    ${PostList()}
    </div>
    <div class="asideWall">
    ${messageBox()}
    ${DMBox()}
    </div>
    </section>
    ${footer()}
    `
}