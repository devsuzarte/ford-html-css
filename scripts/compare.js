class Car {
    constructor(
        name,
        price,
        img,
        motor,
        wheel,
        potency,
        bucketVolume,
        bucketHeight,
        veichleHeight,
        groundHeight,
        loadCapacity
    ) {
        this.name = name,
        this.price = price,
        this.img = img,
        this.motor = motor,
        this.wheel = wheel,
        this.potency = potency,
        this.bucketVolume = bucketVolume,
        this.bucketHeight = bucketHeight,
        this.veichleHeight = veichleHeight,
        this.groundHeight = groundHeight,
        this.loadCapacity = loadCapacity
    }
}

// HTML Documents
const modalCompare = document.getElementById("modal-compare")
const errorCompare = document.getElementById("error-compare")

const carArr = []

// Functions

function SetCarToCompare(input, car) {

    if(!input.checked) {
        const carPosition = _GetCarArrPosition(car)
        carArr.splice(carPosition, 1)

        return
    }

    if(carArr.length > 1) {
        input.checked = 0
        errorCompare.showModal()

        return
    }

    carArr.push(car)
}

function _GetCarArrPosition(car) {
    for(let i = 0; i < carArr.length; i++){
        if(carArr[i].name === car.name) {
            return i;
        }
    }
    return -1;
}

function _UpdateCompareTable() {
    carArr.forEach(car => {

        // Add Image
        document.getElementById("car-compare-img")
            .appendChild((() => {
                const td = document.createElement("td")

                td.appendChild((() => {
                    const img = document.createElement("img")
                    img.setAttribute("src", car.img)

                    return img
                })())

                return td
            })())

            _InsertTableInfos(car)
    });
}

function ShowCompare() {
    if(carArr.length !== 2) {
        errorCompare.showModal()
        return
    }

    _UpdateCompareTable()

    modalCompare.showModal()
}

function HideCompare() {
    modalCompare.close()
    _CleanTableInfos()
}

function _AddElement(car, className, attributeKey) {
    document.getElementById(`car-compare-${className}`)
        .appendChild((() => {
            const td = document.createElement("td")
            td.textContent = car[attributeKey]

            return td
        })())
}

function CloseErrorPopUp() {
    errorCompare.close()
}

function _InsertTableInfos(car) {
    _AddElement(car, "name", "name")
    _AddElement(car, "bucket-height", "bucketHeight")
    _AddElement(car, "height", "veichleHeight")
    _AddElement(car, "ground-height", "groundHeight")
    _AddElement(car, "load-capacity", "loadCapacity")
    _AddElement(car, "motor", "motor")
    _AddElement(car, "potency", "potency")
    _AddElement(car, "bucket-volume", "bucketVolume")
    _AddElement(car, "wheel", "wheel")
    _AddElement(car, "price", "price")
}

function _RemoveElements(className) {
    document.getElementById(`car-compare-${className}`)
        .querySelectorAll("td").forEach(td => td.remove())
}

function _CleanTableInfos() {
    _RemoveElements("img");
    _RemoveElements("name");
    _RemoveElements("bucket-height");
    _RemoveElements("height");
    _RemoveElements("ground-height");
    _RemoveElements("load-capacity");
    _RemoveElements("motor");
    _RemoveElements("potency");
    _RemoveElements("bucket-volume");
    _RemoveElements("wheel");
    _RemoveElements("price");
}