import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "yany_inki"
var name = "Yany Inki"
var description = "No Theory description.";
var authors = "JojoGames320";
var version = "1.0.0";

var currency;
var u;

currency = theory.createCurrency();

var init = () => {
    ///////////////////
    // Regular Upgrades

    // u
    {
        let getDesc = (level) => "u=" + getU(u.level).toString(2);
        u = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(1e12, 10)));
        u.getDescription = (_) => Utils.getMath(getDesc(u.level));
        u.getInfo = (amount) => Utils.getMathTo(getDesc(u.level), getDesc(u.level + amount));
        u.maxLevel = 1492;
    }
}

var getPrimaryEquation = () => {
    let result = "\\rho = \\frac{c_1}{2}";
 
    return result;
}

var getU = (level) => level * 0.2;

init();
