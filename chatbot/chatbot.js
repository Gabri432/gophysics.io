class ChoiceType {
    constructor(choiceName, functionTobeCalled) {
        this.choiceName = choiceName;
        this.functionTobeCalled = functionTobeCalled;
    }
}

const needToFindConstantOrFormulaKeywords = {
    needToSearchKeywords: [
        "formula", "formulas", "constant", "constant", "function", "functions"
    ],
    iKnowWhichFunctionKeywords: ["Acceleration", "AngularFreq", "CentripetalAccel", "CentripetalForce", "Density", "DopplerCloser", 
        "DopplerFarer", "ElectricField", "ElectricPotentDiff", "ElectricPotentEnergyDiff", "EnergyDens", "EnergyDensity", "EscapeSpeed",
        "Force", "Frequency", "GaussFlux", "GravAttract", "GravField", "HeatFlux", "Intensity", "LawCoulomb", "LawGayLussacPressure", "LawGayLussacVolume",
        "LawHagenPoiseuille", "LawOhm1", "LawOhm2", "LawStokes", "LorentzFactor", "MechanicalEner", "Momentum", "NeatHeatEnergyTransfer",
        "NormalForce", "PendulumPeriod", "PhotoElettricEffect", "PotentialElasticEner", "PotentialEner", "PotentialGravEner", "PotentialGravEner2",
        "Power", "Pressure", "ProjectileFlightTime", "ProjectileMaxHeight", "ProjectileMaxRange", "RelativDist", "RelativMass", "RelativMomentum",
        "RelativTime", "Resistance", "Time", "Voltage", "Work"
    ],
    iKnowWhichConstantKeywords: ["absZero", "airConductivity", "airDensity", "angstrom", "atm", "atomicMass", "au", "avogadro", "c",
        "copperConductivity", "copperResistivity", "dielettric", "earthMass", "earthRadius", "electronMass", "elemCharge", "G", 
        "goldConductivity", "gravity", "heliumMass", "hubble", "ironConductivity", "ironResistivity", "lightYear", "moonMass",
        "moonRadius", "neutronMass", "parsec", "planck", "planckMass", "planckTime", "proportConst", "protonMass", "R", "silverResistivity",
        "sound", "steelResistivity", "stefBoltz", "sunMass", "sunRadius", "tesla", "thermCoeffExpansion", "vacuumPermeability", "waterDensity", 
        "waterViscosity0", "waterViscosity20", "weber"
    ]
}

const needToContactSomeoneKeywords = {
    justToTalkKeywords: [
        "someone", "some one", "somebody", "contact", "help"
    ],
    reportBugKeywords: [
        "issue", "issues", "problem", "problems", "report", "reports", "bug", "bugs", 
        "mistake", "mistakes", "error", "errors", "improvement", "improvements", "suggestion", "suggestions",
        "feature", "features"
    ]
}

const contexts = [
    "begin", "askingIfFunctionOrConstant","searchingFunction", "searchingConstant", "askingWhyNeedsContacts"
];

var currentContext = "begin";

window.addEventListener("DOMContentLoaded", () => {
    var choice1 = document.getElementById("askingIfFunctionOrConstant");
    var choice2 = document.getElementById("askingWhyNeedsContacts");
    if (choice1 != null && choice2 != null) {
        choice1.addEventListener("click", askingIfFunctionOrConstant(), false);
        choice2.addEventListener("click", askingWhyNeedsContacts(), false);
    }
});

function returnBotAnswer(answer) {
    return "<div class='bot-message'>" + answer + "</div>";
}
function displayChoices(choice1, choice2) {
    return "<div class='choice' onclick='"+ choice1.functionTobeCalled +"'>" + choice1.choiceName + 
    "</div><div class='choice' onclick='"+ choice2.functionTobeCalled +"'>"+ choice2.choiceName + "</div>";
}

function askingIfFunctionOrConstant() {
    currentContext = "askingIfFunctionOrConstant"
    var conversationHtml = document.getElementById("conversation");
    conversationHtml = "...";
    delay(2000);
    conversationHtml = returnBotAnswer("Ok, is it a function or a constant?");
    choice1 = new ChoiceType(
        choiceName = "It is a function", functionTobeCalled = "returnBotAnswer('Write the function name you are looking for')"
    );
    choice2 = new ChoiceType(
        choiceName = "It is a constant", functionTobeCalled = "returnBotAnswer('Write the constant name you are looking for')"
    );
    conversationHtml += displayChoices(choice1, choice2); 
}

function askingWhyNeedsContacts() {
    currentContext = "askingWhyNeedsContacts"
    var conversationHtml = document.getElementById("conversation");
    conversationHtml = "...";
    delay(2000);
    conversationHtml = returnBotAnswer("Ok, why you need to talk to someone?");
    choice1 = new ChoiceType(
        choiceName = "I need to report a bug or a suggestion for improvement.",
        functionTobeCalled = "redirectTo('You will be redirected to Github within 3 seconds.', 'https://github.com/Gabri432/gophysics/issues/new')"
    );
    choice2 = new ChoiceType(
        choiceName = "I just want to talk with the developer.",
        functionTobeCalled = "redirectTo('You will be redirected to Linkedin within 3 seconds.', 'https://www.linkedin.com/in/gabriele-gatti-87b321190')"
    );
    conversationHtml += displayChoices(choice1, choice2); 
}

function redirectTo(botAnswer, link) {
    conversationHtml = returnBotAnswer(botAnswer)
    delay(3000).then(() => window.location.href = link);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function restartConversation() {
    currentContext = "begin"
    var conversationHtml = document.getElementById("conversation");
    conversationHtml = "..."
    delay(2000);
    conversationHtml = returnBotAnswer("Hi! I'm Gabry, how can I help you?"); 
    choice1 = new ChoiceType(choiceName = "It is a formula", functionTobeCalled = "searchFormula")
    choice2 = new ChoiceType(choiceName = "It is a constant", functionTobeCalled = "searchConstant")
    conversationHtml += displayChoices("I need to find a specific constant or formula.", "I need to talk to someone.");
}

function help() {
    answer = "Ok don't worry!";
}

function dontUnderstand() {
    return "<div class='bot-message'>" + "Sorry I couldn't understand, can you try to ask again?" + "</div>";
}

function searchKeyword(wordToSearch, listofWords) {
    for (var word of listofWords) {
        if (wordToSearch == word.toLowerCase()) {
            return word
        }
    }
    return ""
}

function handleUserInput() {
    var input = document.getElementById("input-text").value;
    conversationHtml = "<div class='user-message'>" + input + "</div>";
    var cleanerInput = input.toLowerCase().replace(/["the", "i", "am", "is", "isn't", "are", "aren't", "it", "was", "were"]/g, "");
    var userInput = cleanerInput.replace(/["%","-","&","€","!","?","*","=","@","$","\n", "."]/g,"").replace(/[" "]/g, ",");
    var userKeywords = userInput.split(",");
    switch (currentContext) {
    case "begin":
    case "askingIfFunctionOrConstant":
    case "searchingFunction":
        for (var keyword of userKeywords) {
            var word = searchKeyword(keyword, needToFindConstantOrFormulaKeywords.iKnowWhichFunctionKeywords)
            if (word != "") {
                redirectTo(
                "You will be redirected to the section of the documentation with this line", 
                "https://gabri432.github.io/gophysics.io/routes/docs/docs.html#"+ keyword
                )
            }
        }
    case "searchingConstant":
        for (var keyword of userKeywords) {
            var word = searchKeyword(keyword, needToFindConstantOrFormulaKeywords.iKnowWhichConstantKeywords)
            if (word != "") {
                redirectTo(
                "You will be redirected to the section of the documentation with this line", 
                "https://gabri432.github.io/gophysics.io/routes/docs/docs.html#"+ keyword
                )
            }
        }
    case "askingWhyNeedsContacts":
        for (var keyword of userKeywords) {
            if (searchKeyword(keyword, needToContactSomeoneKeywords.reportBugKeywords) != "") {
                redirectTo(
                "You will be redirected to Github to send your request.", 
                "https://github.com/Gabri432/gophysics/issues/new"
                )
            } else if (searchKeyword(keyword, needToContactSomeoneKeywords.justToTalkKeywords) != "") {
                redirectTo(
                    "You will be redirected to Linkedin to talk to the developer.", 
                    "https://www.linkedin.com/in/gabriele-gatti-87b321190"
                )
            }
        }
    default:
        "error"
    }
}