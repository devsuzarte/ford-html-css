// HTML Elements
const imgTag = document.getElementById("imagem-principal");

// Carousel
class Carousel {
    constructor(element, images) {
        this._element = element;
        this._images = images;
    }

    async start(interval) {
        let curr = 0

        await setInterval(() => {
            this._element.setAttribute("src", this._images[curr])
            curr === this._images.length - 1 ? curr = 0 : curr++
        }, interval);
    }
}

const images = [
    "../assets/img/imagem_1.jpg",
    "../assets/img/imagem_2.jpg",
    "../assets/img/imagem_3.jpg"
]

const c = new Carousel(imgTag, images);

c.start(5000);