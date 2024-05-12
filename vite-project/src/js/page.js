import { Carousel } from "./logic/carousel.js"

export class Page { 
    constructor() {
        this.title = document.title 
        this.init()
    }

    init = () => {
        this.getPageTitle()
        this.carousel = new Carousel()
    }

    getPageTitle = () => {
        console.log("Init page", this.title) 
    }

    destroy = () => { 
        console.log("Destroy page", this.title) 
    }
}