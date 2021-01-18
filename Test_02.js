let car = {
    color: 'red',
    cost: 9999,
    maxSpeed: 240,
    drivers: ['Boris Jonson', 'Bill Truman', 'William Jordan'],
    getDriver(number) {
        console.log('текущий водитель: ' + car.drivers[number]);
    }
}

if (car.cost >= 1.0e4) {
    console.log('Автомобиль дорогой');
} else {
    console.log('Автомобиль доступный');    
}

console.log('Скорость авто: ' + car.maxSpeed);

maxSpeedChange(car);

car.getDriver(1);

for (let i = (car.drivers.length-1); i >= 0; i--) {
    console.log(car.drivers[i]);       
}

function maxSpeedChange(theCar) {
    car.maxSpeed = 300;
    console.log('Теперь скорость: ' + theCar.maxSpeed);    
}