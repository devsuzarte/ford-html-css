// HTML Elements
const imgTag = document.getElementById("imagem-principal");

// Carousel
class Carousel {
    constructor(element, infos) {
        this.#element = element;
        this.#infos = infos;
        this.#curr = 0
    }

    Start(interval) {
        setInterval(() => {

            this.#element.classList.add('fade-out')

            setTimeout(() => {
                console.log(this.#infos[this.#curr].img)
                this.#element.setAttribute("src", this.#infos[this.#curr].img)

                this.#element.classList.remove('fade-out')
                this.#element.classList.add('fade-in')

            }, 1000)

            this.#Next()
        }, interval);
    }

    #Next() {
        this.#curr === this.#infos.length - 1 ? this.#curr = 0 : this.#curr++
    }
}

// IDEIA DE CLASSE PARA CADA CARRO
// class CarInCarousel {
//     constructor(title, img, url) {
//         this._title = title,
//         this._img = img,
//         this._url = url
//     }
// }

// Variables
const infos = [
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_1.jpg", url: "lancamento.html" },
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_2.jpg", url: "lancamento.html" },
    { title: "FORD RANGER 2022", img: "../assets/img/imagem_3.jpg", url: "lancamento.html" }
]

const carousel = new Carousel(imgTag, infos);

carousel.Start(6000);