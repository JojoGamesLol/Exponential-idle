import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";
import { ui } from "../api/UI";

var id = "QOL_v2";
var name = "QOL v2 Theory";
var description = "No theory description :(";
var authors = "JojoGames320";
var version = "1.0.0";

var currency;
var breh1;

var ftEntry = ui.createEntry({
     column: 1;
    text: game.f.toString(6),
    horizontalOptions: LayoutOptions.CENTER,
    fontSize:10
})

var ftChange = () => ui.createPooup({
	title: "Change f(t)",
	content: ui.createStackLayout({children: [
          ui.createLabel({text: "You change f(t) them too."}),
          ui.createGrid({
                columnDefinitions: ["1*","1*"],
                children: [
                     ui.createLabel({column: 0,text: 'f(t) = ',horizontalOptions: LayoutOptions.CENTER,fontSize:22}),
                     ftEntry
                ]
            }),
        ui.createButton({
             text:'No',
             onClicked: () => {
                    ftChange.hide();
             }
         }),
         ui.createButton({
             text:'Yes',
             onClicked: () => {
                    game.f = ftEntry.text
             }
         }),
    ]
    })
}

var init = () => {
	currency = theory.createCurrency();
	
	// Regular Upgrades
	//breh1
	{
        let getDesc = () => "Change f(t)";
        let getInfo = () => "You can change f(t) them.";
        breh1 = theory.createUpgrade(0, currency, new FreeCost());
        breh1.getDescription = (_) => getDesc();
        breh1.getInfo = () => getInfo();
        breh1.bought = (amount) = {
        	breh1.level -= amount
        	ftChange.show();
        }
    }
}

init();