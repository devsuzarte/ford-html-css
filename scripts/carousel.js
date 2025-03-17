// HTML Elements
const imgTag = document.getElementById("imagem-principal");

// Carousel
class Carousel {
    constructor(element, infos) {
        this._element = element;
        this._infos = infos;
    }

    start(interval) {
        let curr = 0

        setInterval(() => {

            this._element.classList.add('fade-out')

            setTimeout(() => {
                this._element.setAttribute("src", this._infos[curr].img)

                this._element.classList.remove('fade-out')
                this._element.classList.add('fade-in')

            }, 1000)

            curr === this._infos.length - 1 ? curr = 0 : curr++
        }, interval);
    }
}

// Variables
const infos = [
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_1.jpg", url: "lancamento.html" },
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_2.jpg", url: "lancamento.html" },
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_3.jpg", url: "lancamento.html" }
]

// "../assets/img/imagem_1.jpg",
// "../assets/img/imagem_2.jpg",
// "../assets/img/imagem_3.jpg"

const carousel = new Carousel(imgTag, infos);

carousel.start(10000);