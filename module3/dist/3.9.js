"use strict";
{
    // real implementation
    class Car1 {
        startEngine() {
            console.log(`I am starting the car engine`);
        }
        stopEngine() {
            console.log("I am stopping the car engine");
        }
        move() {
            console.log(`I am moving the car`);
        }
        test() {
            console.log(`I am just testing`);
        }
    }
    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    // abstract class
    // idea
    class Car2 {
        test() {
            console.log(`I am just testing`);
        }
    }
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log("I am starting the car  engine");
        }
        stopEngine() {
            console.log("I am stopping the car engine");
        }
        move() {
            console.log("I am moving  the car");
        }
    }
    // const hondaCar = new Car2();
    // hondaCar.startEngine();
    //
}
