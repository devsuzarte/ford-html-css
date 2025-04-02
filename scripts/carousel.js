// HTML Elements
const tags = {
    img: document.getElementById("main-img"), 
    title: document.getElementById("main-title"),
    url: document.getElementById("main-url"),
    urlImage: document.getElementById("main-image-url"),
}

// Variables
const infos = [
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_1.jpg", url: "lancamento.html" },
    { title: "PRIMEIROS CARROS FORD", img: "../assets/img/imagem_2.jpg", url: "#" },
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_3.jpg", url: "lancamento.html" }
]

// Carousel
class Carousel {
    constructor(tags, infos, time) {
        this.tags = tags;
        this.infos = infos;
        this.time = time
        this.curr = 0
        this.interval = null
    }

    Start() {
        this.interval = setInterval(() => {
            this.Next()
        }, this.time);
    }

    Reset() {
        clearInterval(this.interval)
        this.Start()
    }

    Next() {
        this.Reset()
        this.curr === this.infos.length - 1 ? this.curr = 0 : this.curr++
        this.UpdateImage()
    }

    Back() {
        this.Reset()
        this.curr === 0 ? this.curr = this.infos.length - 1 : this.curr--
        this.UpdateImage()
    }

    UpdateImage() {
        this.tags.img.setAttribute("src", this.infos[this.curr].img)
        this.tags.urlImage.setAttribute("href", this.infos[this.curr].url)
        this.tags.title.textContent = this.infos[this.curr].title
        this.tags.url.setAttribute("href", this.infos[this.curr].url)
    }
}

const carousel = new Carousel(tags, infos, 4000);

carousel.Start();