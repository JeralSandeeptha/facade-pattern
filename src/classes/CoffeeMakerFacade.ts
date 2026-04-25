import Biolder from "./Boilder.js";
import Brewer from "./Brewer.js";
import Grinder from "./Grinder.js";

class CoffeeMakerFacade {

    private grinder: Grinder;
    private brewer: Brewer;
    private boilder: Biolder;

    constructor(grinder: Grinder, boilder: Biolder, brewer: Brewer) {
        this.grinder = grinder;
        this.brewer = brewer;
        this.boilder = boilder;
    }

    public makeCoffee() {
        this.grinder.grind();
        this.boilder.boil();
        this.brewer.brew();
        console.log("Coffee is ready!");
    }
}

export default CoffeeMakerFacade;
