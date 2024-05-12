import "./styles.css"
import { App } from "./js/app.js"

export let app = null

function initApp() { 
    app = new App()
}

document.addEventListener("DOMContentLoaded", () => { 
    initApp()
})