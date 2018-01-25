class Car {
    constructor(speed) {
        this.speed = speed;
    }
    excel() {
        this.speed++;
    }
}

const car = new Car(4);
car.excel();
