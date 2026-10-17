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
var perksPrices = [2, 3, 4, 5, 6, 8, 10];

var perks2 = [0, 0, 0, 0];
var perks2Prices = [2, 3, 4, 5];

var victory = false;
var cheater = false;

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

    perks.forEach(function(x, i){
        if(x == 1){
            document.getElementById("perk" + (i + 1)).style.fontWeight = "bold";
        }else{
            document.getElementById("perk" + (i + 1)).style.fontWeight = "normal";
        }
    })

    perks2.forEach(function(x, i){
        if(x == 1){
            document.getElementById("perk2" + (i + 1)).style.fontWeight = "bold";
        }else{
            document.getElementById("perk2"+ (i + 1)).style.fontWeight = "normal";
        }
    })

    if(perks[3] == 1){
        document.getElementById("rebirthDesc").innerHTML = "Reset all factories to quadruple your money production";
    }else{
        document.getElementById("rebirthDesc").innerHTML = "Reset all factories to double your money production";
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

    if(perks2[3] == 1){
        document.getElementById("autobuyerDiv3").style.visibility = "visible";
    }else{
        document.getElementById("autobuyerDiv3").style.visibility = "hidden";
    }

    money = Math.ceil(money + (autobuyers * ((1.5 + (0.5 * perks[1])) ** autobuyersBought) * (((1.5 + (0.5 * perks[1]) ** autobuyersBought2) * perks[2] * 0.25) + 1) * ((2 + (2 * perks[3])) ** rebirths) * (1 + (0.2 * tickspeed * perks[6])) * tickspeed));
    autobuyers = Math.ceil(autobuyers + (autobuyers2 * ((1.5 + (0.5 * perks[1])) ** autobuyersBought2) * (4 ** rebirths2) * (1 + (4 * rebirths * perks2[0])) * tickspeed));
    autobuyers2 = Math.ceil(autobuyers2 + autobuyers3 * tickspeed);

    if(money == Infinity && victory == false){
        if(cheater == true){
            alert("u r cheetah so f00k u no w 4 u");
        }else{
            alert("ok you win");
        }

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

function applyPerks(){
    perks.forEach(function(x, i){
        perks[i] = rebirths >= perksPrices[i];
    })

    perks2.forEach(function(x, i){
        perks2[i] = rebirths2 >= perks2Prices[i];
    })
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

        applyPerks();

        resetFactories();
    }
}

function rebirth2(){
    if(rebirths >= rebirthPrice2){
        rebirths2 = rebirths2 + 1;
        
        for(var i = 0; i < perks.length; i++){
            perks[i] = 0;
        }

        applyPerks();

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

function dataToSave(){
    return [money,
    autobuyers, autobuyersBought, autobuyersPrice,
    autobuyers2, autobuyersBought2, autobuyersPrice2,
    autobuyers3, autobuyersBought3, autobuyersPrice3,
    tickspeed, tickspeedBought, tickspeedPrice,
    rebirths, rebirthPrice,
    rebirths2, rebirthPrice2,
    perks, perks2, victory, cheater
    ]
}

function save(){
    setCookie("saveData", dataToSave(), 100000000);

    alert("Data saved!");
}

function load(){
    let saveData = getCookie("saveData");

    if(saveData != ""){
        money = saveData[0];
        autobuyers = saveData[1];
        autobuyersBought = saveData[2];
        autobuyersPrice = saveData[3];
        autobuyers2 = saveData[4];
        autobuyersBought2 = saveData[5];
        autobuyersPrice2 = saveData[6];
        autobuyers3 = saveData[7];
        autobuyersBought3 = saveData[8];
        autobuyersPrice3 = saveData[9];
        tickspeed = saveData[10];
        tickspeedBought = saveData[11];
        tickspeedPrice = saveData[12];
        rebirths = saveData[13];
        rebirthPrice = saveData[14];
        rebirths2 = saveData[15];
        rebirthPrice2 = saveData[16];
        perks = saveData[17];
        perks2 = saveData[18];
        victory = saveData[19];
        cheater = saveData[20];

        applyPerks();

        alert("Data loaded!");
    }else{
        alert("No data to load!");
    }
}

function reset(){
    let resetPrompt = prompt("This will reset EVERYTHING and delete your save. Are you sure you want to reset?\n\nType \"RESET\" (case sensitive) in the box below and confirm to proceed.");

    if(resetPrompt == "RESET"){
        setCookie("saveData", "", 0);

        rebirths = 0;
        rebirthPrice = 0;
        rebirths2 = 0;
        rebirthPrice2 = 0;
        perks = [0, 0, 0, 0, 0, 0, 0];
        perks2 = [0, 0, 0, 0];
        victory = false;
        cheater = false;
        resetFactories();

        applyPerks();

        alert("Data has been reset!");
    }else if(resetPrompt == null){
        alert("Data reset has been aborted!");
    }else{
        alert("An incorrect text has been entered!");
    }
}

function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*3600*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 1; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function deleteCookie(cname){
    document.cookie = cname + "=" + getCookie(cname) + ";expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

addEventListener("keydown", (event) => {
    if(event.keyCode === 123){
        alert("cheetah");
        cheater = true;
    }
});
