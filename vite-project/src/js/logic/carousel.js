export class Carousel {
    constructor() {
        this.carousel = document.querySelector(".carousel")
        this.transitionOverlay = document.querySelector(".transition-overlay")
        if (!this.carousel || !this.transitionOverlay) {
            return false
        }
        this.cards = document.querySelectorAll(".cards")
        this.colors = ["#ECF48D", "#D8C2F3", "#F6BBED"]
        this.init()
    }

    init = () => {
        this.bindEvents()
        this.cardColors()
        this.animateCardsOnScroll()
    }

    bindEvents = () => {
        this.carousel.addEventListener("scroll", this.animateCardsOnScroll)

        this.cards.forEach((card, index) => {
            card.addEventListener("click", () => {
                const transitionOverlayColor = card.style.backgroundColor
                this.setTransitionOverlayColor(transitionOverlayColor)
            })

            card.addEventListener("mouseenter", () => {
                if (!this.isCardActive(card)) {
                    this.animateCardsOnMouseEnter(card, index)
                }
            })

            card.addEventListener("mouseleave", () => {
                if (!this.isCardActive(card)) {
                    this.animateCardsOnMouseLeave(card)
                }
            })
        })
    }

    setTransitionOverlayColor = (transitionOverlayColor) => {
        this.transitionOverlay.style.backgroundColor = transitionOverlayColor
    }

    cardColors = () => {
        this.cards.forEach((card, index) => {
            const colorIndex = index % this.colors.length
            card.style.backgroundColor = this.colors[colorIndex]
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
                card.setAttribute('data-animated', 'true')
            } else {
                card.style.transform = "scale(1) rotate(0deg)"
                card.removeAttribute('data-animated')
            }
        })
    }

    animateCardsOnMouseEnter = (card, index) => {
        const rotationDegrees = index % 2 === 0 ? "4deg" : "-4deg"
        card.style.transform = `rotate(${rotationDegrees})`
    }

    animateCardsOnMouseLeave = (card) => {
        card.style.transform = "rotate(0deg)"
    }

    isCardActive = (card) => {
        return card.getAttribute('data-animated') === 'true'
    }
}