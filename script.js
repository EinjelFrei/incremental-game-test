var money = 0;

var autobuyers = 0;
var autobuyersBought = 0;
var autobuyersPrice = 0;

var autobuyers2 = 0;
var autobuyersBought2 = 0;
var autobuyersPrice2 = 0;

var autobuyers3 = 0;
var autobuyersBought3 = 0;
var autobuyersPrice3 = 0;

var tickspeed = 1;
var tickspeedBought = 0;
var tickspeedPrice = 0;

var rebirths = 0;
var rebirthPrice = 0;

var rebirths2 = 0;
var rebirthPrice2 = 0;

var perks = [0, 0, 0, 0, 0, 0, 0];
var perks2 = [0, 0, 0, 0];

var victory = false;

setInterval(function(){
    document.getElementById("money").innerHTML = "Money: " + scientificNotation(money);

    autobuyersPrice = 10 ** (autobuyersBought + 1);
    document.getElementById("autobuyers").innerHTML = "Amount: " + scientificNotation(autobuyers);
    document.getElementById("autobuyersPrice").innerHTML = "Price: " + scientificNotation(autobuyersPrice);
    document.getElementById("autobuyersMultiplier").innerHTML = "Multiplier: x" + scientificNotation(((1.5 + (0.5 * perks[1])) ** autobuyersBought) * ((((1.5 + (0.5 * perks[1])) ** autobuyersBought2) * perks[2] * 0.25) + 1));

    autobuyersPrice2 = 100 ** (autobuyersBought2 + 1);
    document.getElementById("autobuyers2").innerHTML = "Amount: " + scientificNotation(autobuyers2);
    document.getElementById("autobuyersPrice2").innerHTML = "Price: " + scientificNotation(autobuyersPrice2);
    document.getElementById("autobuyersMultiplier2").innerHTML = "Multiplier: x" + scientificNotation((1.5 + (0.5 * perks[1])) ** autobuyersBought2);

    autobuyersPrice3 = 1000000000000 + (10000 ** (autobuyersBought3 + 1));
    document.getElementById("autobuyers3").innerHTML = "Amount: " + scientificNotation(autobuyers3);
    document.getElementById("autobuyersPrice3").innerHTML = "Price: " + scientificNotation(autobuyersPrice3);
    document.getElementById("autobuyersMultiplier3").innerHTML = "Multiplier: x" + scientificNotation((1.5 + (0.5 * perks[1])) ** autobuyersBought3);

    tickspeedPrice = 10 ** (tickspeedBought + 2);
    document.getElementById("tickspeed").innerHTML = "Tickspeed: x" + tickspeed;
    document.getElementById("tickspeedPrice").innerHTML = "Price: " + scientificNotation(tickspeedPrice);

    rebirthPrice = 2 * (rebirths + 1);
    document.getElementById("rebirths").innerHTML = rebirths + " rebirths";
    document.getElementById("rebirthPrice").innerHTML = "Price: " + rebirthPrice + " Money factory factories";

    rebirthPrice2 = 8 + (2 * rebirths2);
    document.getElementById("rebirths2").innerHTML = rebirths2 + " rebirth rebirths";
    document.getElementById("rebirthPrice2").innerHTML = "Price: " + rebirthPrice2 + " rebirths"
    document.getElementById("rebirthDesc2").innerHTML = "Reset everything to quadruple your factory factory production";

    if(perks[0] == 1){
        document.getElementById("perk1").style.fontWeight = "bold";
    }else{
        document.getElementById("perk1").style.fontWeight = "normal";
    }
    if(perks[1] == 1){
        document.getElementById("perk2").style.fontWeight = "bold";
    }else{
        document.getElementById("perk2").style.fontWeight = "normal";
    }
    if(perks[2] == 1){
        document.getElementById("perk3").style.fontWeight = "bold";
    }else{
        document.getElementById("perk3").style.fontWeight = "normal";
    }
    if(perks[3] == 1){
        document.getElementById("perk4").style.fontWeight = "bold";
        document.getElementById("rebirthDesc").innerHTML = "Reset all factories to quadruple your money production";
    }else{
        document.getElementById("perk4").style.fontWeight = "normal";
        document.getElementById("rebirthDesc").innerHTML = "Reset all factories to double your money production";
    }
    if(perks[4] == 1){
        document.getElementById("perk5").style.fontWeight = "bold";
    }else{
        document.getElementById("perk5").style.fontWeight = "normal";
    }
    if(perks[5] == 1){
        document.getElementById("perk6").style.fontWeight = "bold";
    }else{
        document.getElementById("perk6").style.fontWeight = "normal";
    }
    if(perks[6] == 1){
        document.getElementById("perk7").style.fontWeight = "bold";
    }else{
        document.getElementById("perk7").style.fontWeight = "normal";
    }

    if(perks[5] == 1 || rebirths2 >= 1){
        document.getElementById("rebirthDiv2").style.visibility = "visible";
        document.getElementById("perks2").style.visibility = "visible";
        document.getElementById("perk6").innerHTML = "8 rebirths: Tickspeed now scales by 1";
    }else{
        document.getElementById("rebirthDiv2").style.visibility = "hidden";
        document.getElementById("perks2").style.visibility = "hidden";
        document.getElementById("perk6").innerHTML = "8 rebirths: Unlock a new prestige layer";
    }

    if(perks2[0] == 1){
        document.getElementById("perk21").style.fontWeight = "bold";
    }else{
        document.getElementById("perk21").style.fontWeight = "normal";
    }
    if(perks2[1] == 1){
        document.getElementById("perk22").style.fontWeight = "bold";
    }else{
        document.getElementById("perk22").style.fontWeight = "normal";
    }
    if(perks2[2] == 1){
        document.getElementById("perk23").style.fontWeight = "bold";
    }else{
        document.getElementById("perk23").style.fontWeight = "normal";
    }
    if(perks2[3] == 1){
        document.getElementById("perk24").style.fontWeight = "bold";
        document.getElementById("autobuyerDiv3").style.visibility = "visible";
    }else{
        document.getElementById("perk24").style.fontWeight = "normal";
        document.getElementById("autobuyerDiv3").style.visibility = "hidden";
    }
    

    money = Math.ceil(money + (autobuyers * ((1.5 + (0.5 * perks[1])) ** autobuyersBought) * (((1.5 + (0.5 * perks[1]) ** autobuyersBought2) * perks[2] * 0.25) + 1) * ((2 + (2 * perks[3])) ** rebirths) * (1 + (0.2 * tickspeed * perks[6])) * tickspeed));
    autobuyers = Math.ceil(autobuyers + (autobuyers2 * ((1.5 + (0.5 * perks[1])) ** autobuyersBought2) * (4 ** rebirths2) * (1 + (4 * rebirths * perks2[0])) * tickspeed));
    autobuyers2 = Math.ceil(autobuyers2 + autobuyers3 * tickspeed);

    if(money == Infinity && victory == false){
        alert("ok you win");
        victory = true;
    }
}, 50)

setInterval(function(){
    if(perks[4] == 1){
        buyAutobuyer3();
        buyAutobuyer2();
        buyAutobuyer();
    }
    if(perks[6] == 1){
        buyTickspeed();
    }
}, 500)

function onButtonPressed(){
    money = money + 1;
}

function buyAutobuyer(){
    if(money >= autobuyersPrice){
        money = money - autobuyersPrice;
        autobuyers = autobuyers + 1;
        autobuyersBought = autobuyersBought + 1;
    }
}

function buyAutobuyer2(){
    if(money >= autobuyersPrice2){
        money = money - autobuyersPrice2;
        autobuyers2 = autobuyers2 + 1;
        autobuyersBought2 = autobuyersBought2 + 1;
    }
}

function buyAutobuyer3(){
    if(money >= autobuyersPrice3 && perks2[3] == 1){
        money = money - autobuyersPrice3;
        autobuyers3 = autobuyers3 + 1;
        autobuyersBought3 = autobuyersBought3 + 1;
    }
}

function buyTickspeed(){
    if(money >= tickspeedPrice){
        money = money - tickspeedPrice;
        tickspeed = roundNDecimals(tickspeed + (0.4 + (0.6 * perks[5] * (rebirths2 >= 1))), 1);
        tickspeedBought = tickspeedBought + 1;
    }
}

function resetFactories(){
    money = 10 * perks[0];

    autobuyers = 0 + (3 * perks[3]);
    autobuyersBought = 0 + (3 * perks[3]);

    autobuyers2 = 0;
    autobuyersBought2 = 0;

    autobuyers3 = 0;
    autobuyersBought3 = 0;

    tickspeed = 1;
    tickspeedBought = 0;
}
    
function rebirth(){
    if(autobuyers2 >= rebirthPrice){
        rebirths = rebirths + 1;

        perks[0] = rebirths >= 2;
        perks[1] = rebirths >= 3;
        perks[2] = rebirths >= 4;
        perks[3] = rebirths >= 5;
        perks[4] = rebirths >= 6;
        perks[5] = rebirths >= 8;
        perks[6] = rebirths >= 10;

        resetFactories();
    }
}

function rebirth2(){
    if(rebirths >= rebirthPrice2){
        rebirths2 = rebirths2 + 1;
        
        for(var i = 0; i < perks.length; i++){
            perks[i] = 0;
        }

        perks2[0] = rebirths2 >= 2;
        perks2[1] = rebirths2 >= 3;
        perks2[2] = rebirths2 >= 4;
        perks2[3] = rebirths2 >= 5;

        resetFactories();
        if(perks2[2] == 1){
            rebirths = 8;
            for(var i = 0; i < 6; i++){
                perks[i] = 1;
            }
        }else if(perks2[1] == 1){
            rebirths = 4;
            for(var i = 0; i < 3; i++){
                perks[i] = 1;
            }
        }else{
            rebirths = 0;
        }
    }
}

function changelog(){
    if(document.getElementById("changelog").style.visibility == "hidden"){
        document.getElementById("changelog").style.visibility = "visible"
    }else{
        document.getElementById("changelog").style.visibility = "hidden"
    }
}

function roundNDecimals(x, i){
    return Math.round(x * (10 ** i)) / (10 ** i);
}

function scientificNotation(x){
    if(x >= 1000000 && x != Infinity){
        var exponent = Math.floor(Math.log10(x));
        var mantissa = roundNDecimals(x / (10 ** exponent), 3);

        return mantissa + "e" + exponent;
    }else{
        return x;
    }
}