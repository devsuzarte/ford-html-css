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
        this._name = name,
        this._price = price,
        this._img = img,
        this._motor = motor,
        this._wheel = wheel,
        this._potency = potency,
        this._bucketVolume = bucketVolume,
        this._bucketHeight = bucketHeight,
        this._veichleHeight = veichleHeight,
        this._groundHeight = groundHeight,
        this._loadCapacity = loadCapacity
    }
}

// HTML Documents
const modalCompare = document.getElementById("modal-compare")

const carArr = []

function _GetCarArrPosition(arr, car) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i]._name  === car._name)
            return i;
    }
    return -1;
}

function SetCarToCompare(input, car) {

    if(!input.checked) {
        carArr.pop(car)

        return
    }

    if(carArr.length > 1) {
        input.checked = 0
        alert("Número máximo de comparações excedido")

        return
    }

    carArr.push(car)
}

function _UpdateCompareTable() {
    carArr.forEach(car => {

        // Add Image
        document.getElementById("car-compare-img")
            .appendChild((() => {
                const td = document.createElement("td")

                td.appendChild((() => {
                    const img = document.createElement("img")
                    img.setAttribute("src", car._img)

                    return img
                })())

                return td
            })())

        // Add Name
        document.getElementById("car-compare-name")
            .appendChild((() => {
                const td = document.createElement("td")
                td.textContent = car._name

                return td
            })())
        
        // Add Bucket Height
        document.getElementById("car-compare-bucket-height")
            .appendChild((() => {
                const td = document.createElement("td")
                td.textContent = car._bucketHeight

                return td
            })())
        
        // Add Height
        document.getElementById("car-compare-height")
            .appendChild((() => {
                const td = document.createElement("td")
                td.textContent = car._veichleHeight

                return td
            })())

        // Add Ground Height
        document.getElementById("car-compare-ground-height")
            .appendChild((() => {
                const td = document.createElement("td")
                td.textContent = car._groundHeight

                return td
            })())
        
        // Add Load Capacity
        document.getElementById("car-compare-load-capacity")
            .appendChild((() => {
                const td = document.createElement("td")
                td.textContent = car._loadCapacity

                return td
            })())

        // Add Motor
        document.getElementById("car-compare-motor")
        .appendChild((() => {
            const td = document.createElement("td")
            td.textContent = car._motor

            return td
        })())

        // Add Potency
        document.getElementById("car-compare-potency")
        .appendChild((() => {
            const td = document.createElement("td")
            td.textContent = car._potency

            return td
        })())

        // Add Bucket Volume
        document.getElementById("car-compare-bucket-volume")
        .appendChild((() => {
            const td = document.createElement("td")
            td.textContent = car._bucketVolume

            return td
        })())

        // Add Wheel
        document.getElementById("car-compare-wheel")
        .appendChild((() => {
            const td = document.createElement("td")
            td.textContent = car._wheel

            return td
        })())

        // Add Price
        document.getElementById("car-compare-price")
        .appendChild((() => {
            const td = document.createElement("td")
            td.textContent = car._price

            return td
        })())
    });
}

function ShowCompare() {
    if(carArr.length !== 2) {
        alert("Você precisa selecionar dois carros para a comparação!")
        return
    }

    _UpdateCompareTable()

    modalCompare.showModal()
}

function HideCompare() {
    modalCompare.close()

    // Remove Image
    document.getElementById("car-compare-img")
        .querySelectorAll("td").forEach(td => td.remove())
    
    // Remove Image
    document.getElementById("car-compare-name")
        .querySelectorAll("td").forEach(td => td.remove())    
    
    // Remove Name
    document.getElementById("car-compare-bucket-height")
        .querySelectorAll("td").forEach(td => td.remove())

    // Remove Name
    document.getElementById("car-compare-height")
        .querySelectorAll("td").forEach(td => td.remove())

    // Remove Name
    document.getElementById("car-compare-ground-height")
        .querySelectorAll("td").forEach(td => td.remove())

    // Remove Name
    document.getElementById("car-compare-load-capacity")
        .querySelectorAll("td").forEach(td => td.remove())

    // Remove Name
    document.getElementById("car-compare-motor")
        .querySelectorAll("td").forEach(td => td.remove())

    // Remove Name
    document.getElementById("car-compare-potency")
        .querySelectorAll("td").forEach(td => td.remove())

    // Remove Name
    document.getElementById("car-compare-bucket-volume")
        .querySelectorAll("td").forEach(td => td.remove())

    // Remove Name
    document.getElementById("car-compare-wheel")
        .querySelectorAll("td").forEach(td => td.remove())

    // Remove Name
    document.getElementById("car-compare-price")
        .querySelectorAll("td").forEach(td => td.remove())
}