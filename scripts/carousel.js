// HTML Elements
const imgTag = document.getElementById("imagem-principal");

// Carousel
class Carousel {
    constructor(element, infos) {
        this._element = element;
        this._infos = infos;
        this._curr = 0
    }

    Start(interval) {
        setInterval(() => {

            this._element.classList.add('fade-out')

            setTimeout(() => {
                console.log(this._infos[this._curr].img)
                this._element.setAttribute("src", this._infos[this._curr].img)

                this._element.classList.remove('fade-out')
                this._element.classList.add('fade-in')

            }, 1000)

            this._Next()
        }, interval);
    }

    _Next() {
        this._curr === this._infos.length - 1 ? this._curr = 0 : this._curr++
    }
}

// Variables
const infos = [
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_1.jpg", url: "lancamento.html" },
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_2.jpg", url: "lancamento.html" },
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_3.jpg", url: "lancamento.html" }
]

const carousel = new Carousel(imgTag, infos);

carousel.Start(6000);