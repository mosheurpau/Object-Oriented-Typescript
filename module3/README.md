// oop.ts

/**
 * Introduction to Object-Oriented Programming (OOP)
 *
 * OOP is a programming paradigm that organizes code around "objects," which are instances of classes.
 * OOP emphasizes concepts like encapsulation, inheritance, and polymorphism to improve code structure,
 * reusability, and maintainability.
 */

/**
 * Class and Object
 *
 * A class is a blueprint for creating objects. It defines the properties (data) and methods (behavior)
 * that objects of that class will have.
 */
class Dog {
  name: string;
  breed: string;

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }

  bark(): void {
    console.log("Woof!");
  }
}

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.bark(); // Output: Woof!

/**
 * Inheritance
 *
 * Inheritance allows a class (child class) to inherit properties and methods from another class (parent class).
 * This promotes code reuse and establishes relationships between classes.
 */
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMeters = 0): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
sam.move(); // Output: Slithering... Sammy the Python moved 5m.

/**
 * Type Guards
 *
 * Type guards help you check the type of a variable at runtime.
 */

/**
 * Type Guard using typeof
 *
 * The `typeof` operator returns a string indicating the type of the operand.
 */
function padLeft(value: string | number, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

/**
 * Type Guard using instanceof
 *
 * The `instanceof` operator checks if an object is an instance of a particular class.
 */
class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}

/**
 * Access Modifiers
 *
 * Access modifiers control the visibility of class members (properties and methods).
 *
 * - public: Accessible from anywhere. (Default)
 * - protected: Accessible within the class and its subclasses.
 * - private: Accessible only within the class.
 */
class Person {
  public name: string;
  protected age: number;
  private salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

/**
 * Getters and Setters
 *
 * Getters and setters provide controlled access to class properties.
 */
class Employee {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty.");
    }
  }
}

/**
 * Statics
 *
 * Static members belong to the class itself, not to specific instances.
 */
class Grid {
  static origin = { x: 0, y: 0 };

  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) { }
}

/**
 * Polymorphism
 *
 * Polymorphism allows you to treat objects of different classes in a uniform way.
 */
class Animal2 {
  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog2 extends Animal2 {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat2 extends Animal2 {
  makeSound() {
    console.log("Meow!");
  }
}

let animals: Animal2[] = [new Dog2(), new Cat2()];
animals.forEach(animal => animal.makeSound());

/**
 * Abstraction
 *
 * Abstraction hides complex implementation details, providing a simplified interface.
 */
abstract class Vehicle {
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log("Vehicle is moving");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }
  stopEngine(): void {
    console.log("Car engine stopped");
  }
}

/**
 * Encapsulation
 *
 * Encapsulation protects the internal state of an object by hiding its data and implementation details.
 */
class BankAccount {
  private _balance: number = 0;

  deposit(amount: number): void {
    this._balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this._balance) {
      this._balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  get balance(): number {
    return this._balance;
  }
}