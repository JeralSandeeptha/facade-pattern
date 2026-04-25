import Biolder from "./classes/Boilder.js";
import Brewer from "./classes/Brewer.js";
import CoffeeMakerFacade from "./classes/CoffeeMakerFacade.js";
import Grinder from "./classes/Grinder.js";

// client code
const brewer = new Brewer();
const grinder = new Grinder();
const boilder = new Biolder();

const coffeeMachine = new CoffeeMakerFacade(grinder, boilder, brewer);

// with the simple function we can do everything, so client don't have to worry about the complex subsystem
coffeeMachine.makeCoffee();
