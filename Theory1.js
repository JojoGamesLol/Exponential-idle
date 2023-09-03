import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "classic_machine";
var name = "Classic Machine Theory";
var description = "The Classic Machine Theory";
var authors = "JojoGames320";
var version = 1;

var time = 0;

var currency, currency2;
var s1;

var init = () => {
    currency = theory.createCurrency();
    currency2 = theory.createCurrency();

    ///////////////////
    // Regular Upgrades

    // s1 (Free)
    {
        let getDesc = (level) => "s_1=" + getS1.toString(0);
        s1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(800, 1.44))));
        s1.getDescription = (_) => Utils.getMath(getDesc(s1.level));
        s1.getInfo = (amount) => boughtOrRefunded = (_) => Theory.invalidateTertitaryEquation();
    }

    /////////////////////
    // Permanent Upgrades
    theory.createPublicationUpgrade(0, currency, 1e18);
    theory.createBuyAllUpgrade(1, currency, 1e21);
    theory.createAutoBuyerUpgrade(2, currency2, 1000);
    
    /////////////////
    //// Achievements   

    ac1 = theory.createAchievementCategory(0, "Classic Machines");
    theory.createAchievement(0, ac1, "Started", "Reach 1 Classic Machine" () => currency.value > 0);
  
    ///////////////////////
    //// Milestone Upgrades
}

var tick = (elapsedTime, multiplier) => {

    if (tickspeed.isZero)
        return;

    let timeLimit = 1 / tickspeed.Min(BigNumber.TEN).toNumber();
    time += elapsedTime;

    if (time >= timeLimit - 1e-8) {
        let bonus = theory.publicationMultiplier;
        let q1 = getC1(c1.level);

        currency.value = bonus * q1 * time;
        currency2.value = Math.floor(time / 30)

        time = 0;
    }
}

var getPrimaryEquation = () => {
    let result = "c_1";
 
    return result;
}

var getPublicationMultiplier = (tau) => BigNumber.ONE + ((currency.value.log10() - 18) * 3333.33;
var getPublicationMultiplierFormula = (symbol) => "\\frac{{" + symbol + "}^{0.164}}{3}";
var getTau = () => currency.value;
var get2DGraphValue = () => currency.value.sign * (BigNumber.ONE + currency.value.abs()).log10().toNumber();

var postPublish = () => {
    time = 0;
    currency.value = BigNumber.ZERO;
    currency2.value = BigNumber.ZERO;
    theory.invalidateTertiaryEquation();
}

var getS1 = (level) => s1.level;

init();