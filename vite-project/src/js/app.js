import { Page } from "./page.js" 
import { Router } from "./router.js" 
import { Carousel } from "./logic/carousel.js"

export class App { 
    constructor() {
        this.init() 
    }
    
    init = () => {
        this.router = new Router()
        this.carousel = new Carousel()
    }
    
    handleContentReplaced = () => { 
        this.createPage()
    }
    
    createPage = () => {
        if (this.page) {
            this.page.destroy()
        }
        this.page = new Page()
    }
}