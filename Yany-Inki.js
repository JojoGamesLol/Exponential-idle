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

currency = theory.createCurrency();

var getPrimaryEquation = () => {
    let result = "\\rho = \\frac{c_1}{2}";
 
    return result;
}
