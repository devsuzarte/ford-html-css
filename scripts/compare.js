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

const carArr = []

function GetCarArrPosition(arr, car) {
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
