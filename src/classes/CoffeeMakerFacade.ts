import Biolder from "./Boilder.js";
import Brewer from "./Brewer.js";
import Grinder from "./Grinder.js";

class CoffeeMakerFacade {

    private grinder: Grinder;
    private brewer: Brewer;
    private boilder: Biolder;

    constructor() {
        this.grinder = new Grinder();
        this.brewer = new Brewer();
        this.boilder = new Biolder();
    }

    public makeCoffee() {
        this.grinder.grind();
        this.boilder.boil();
        this.brewer.brew();
        console.log("Coffee is ready!");
    }
}

export default CoffeeMakerFacade;
