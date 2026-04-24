import CoffeeMakerFacade from "./classes/CoffeeMakerFacade.js";

// client code
const coffeeMachine = new CoffeeMakerFacade();

// with the simple function we can do everything, so client don't have to worry about the complex subsystem
coffeeMachine.makeCoffee();
