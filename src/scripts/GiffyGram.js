import { PostList } from "../scripts/feed/PostList.js"
import { footer } from "../scripts/nav/Footer.js"


export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
    
    <section class="Header">

    <div class="DirectMessage"></div>
    
    </section>

    <section class="MessageForm">
    
    </section>
    <section class="PostEntry">
    
    </section>

    <section class="PostList">
   ${PostList()}
    </section>

    <section class="Footer">
        ${footer()}
    </section>

git
    `
}
