export class Carousel {
    constructor() {
        this.carousel = document.querySelector(".carousel")
        this.pageTransition = document.querySelector(".page-transition")
        if (!this.carousel || !this.pageTransition) {
            return false
        }
        this.cards = document.querySelectorAll(".cards")
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.carousel.addEventListener("scroll", this.animateCardsOnScroll)
        this.cards.forEach(card => {
            card.addEventListener("click", this.setPageTransitionColor)
        })
    }

    animateCardsOnScroll = () => {
        this.cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect()
            const containerRect = this.carousel.getBoundingClientRect()
            const cardCenter = rect.left + rect.width / 2
            const containerCenter = containerRect.left + containerRect.width / 2

            if (Math.abs(cardCenter - containerCenter) < 10) {
                const rotationDegrees = index % 2 === 0 ? "4deg" : "-4deg"
                card.style.transform = `scale(1.2) rotate(${rotationDegrees})`
            } else {
                card.style.transform = "scale(1) rotate(0deg)"
            }
        })
    }

    setPageTransitionColor = (event) => {
        const clickedCard = event.currentTarget
        const backgroundColorClickedCard = window.getComputedStyle(clickedCard).backgroundColor
        this.pageTransition.style.backgroundColor = backgroundColorClickedCard
    }
}
