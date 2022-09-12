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
    forgotWhichKeywords: [
        "no", "dunno", "don't", "dont", "cannot", "cant", "can't", "remeber"
    ],
    iKnowWhichFormulaKeywords: ["Acceleration", "AngularFreq", "CentripetalAccel", "CentripetalForce", "Density", "DopplerCloser", 
        "DopplerFarer", "ElectricField", "ElectricPotentDiff", "ElectricPotentEnergyDiff", "EnergyDens", "EnergyDensity", "EscapeSpeed",
        "Force", "Frequency", "GaussFlux", "GravAttract", "GravField", "HeatFlux", "Intensity", "LawCoulomb", "LawGayLussacPressure", "LawGayLussacVolume",
        "LawHagenPoiseuille", "LawOhm1", "LawOhm2", "LawStokes", "LorentzFactor", "MechanicalEner", "Momentum", "NeatHeatEnergyTransfer",
        "NormalForce", "PendulumPeriod", "PhotoElettricEffect", "PotentialElasticEner", "PotentialEner", "PotentialGravEner", "PotentialGravEner2",
        "Power", "Pressure", "ProjectileFlightTime", "ProjectileMaxHeight", "ProjectileMaxRange", "RelativDist", "RelativMass", "RelativMomentum",
        "RelativTime", "Resistance", "Time", "Voltage", "Work"
    ],
    constantsList: ["absZero", "airConductivity", "airDensity", "angstrom", "atm", "atomicMass", "au", "avogadro", "c",
        "copperConductivity", "copperResistivity", "dielettric", "earthMass", "earthRadius", "electronMass", "elemCharge", "G", 
        "goldConductivity", "gravity", "heliumMass", "hubble", "ironConductivity", "ironResistivity", "lightYear", "moonMass",
        "moonRadius", "neutronMass", "parsec", "planck", "planckMass", "planckTime", "proportConst", "protonMass", "R", "silverResistivity",
        "sound", "steelResistivity", "stefBoltz", "sunMass", "sunRadius", "tesla", "thermCoeffExpansion", "vacuumPermeability", "waterDensity", 
        "waterViscosity0", "waterViscosity20", "weber"
    ]
}

const needToContactSomeoneKeywords = {
    contactKeywords: [
        "someone", "some one", "somebody", "contact", "help"
    ],
    whyContactKeywords: [
        "issue", "issues", "problem", "problems", "report", "reports", "bug", "bugs", 
        "mistake", "mistakes", "error", "errors", "improvement", "improvements", "suggestion", "suggestions",
        "feature", "features"
    ]
}

const botQuestions = [
    "Hi! I'm Gabry, how can I help you?", "Ok, is it a formula or a constant?", "Ok, why you need to talk to someone?",
    "Write the formula you are looking for.", "Write the constant you are looking for."
];

const contexts = [
    "begin", "searchingFormula", "searchingConstant", "askingWhyNeedsContacts"
];

var currentContext = "";

function returnBotAnswer(answer) {
    return "<div class='bot-message'>" + answer + "</div>";
}
function displayChoices(choice1, choice2) {
    return "<div class='choice' onclick='"+ choice1.functionTobeCalled +"()'>" + choice1.choiceName + 
    "</div><div class='choice' onclick='"+ choice2.functionTobeCalled +"()'>"+ choice2.choiceName + "</div>";
}

function searchFormulaOrConstant() {
    currentContext = ""
    var conversationHtml = document.getElementById("conversation");
    conversationHtml = "...";
    delay(2000);
    conversationHtml = returnBotAnswer("Ok, is it a formula or a constant?");
    choice1 = new ChoiceType(choiceName = "It is a formula", functionTobeCalled = "searchFor");
    choice2 = new ChoiceType(choiceName = "It is a constant", functionTobeCalled = "searchFor");
    conversationHtml += displayChoices(choice1, choice2); 
}

function searchFor() {
    var conversationHtml = document.getElementById("conversation");
    conversationHtml = "...";
    delay(2000);
    conversationHtml = returnBotAnswer("Write the formula you are looking for.");
}

function searchContacts() {
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
        if (wordToSearch == word) {}
    }
}

function handleUserInput() {
    var input = document.getElementById("input-text").value;
    conversationHtml = "<div class='user-message'>" + input + "</div>";
    var userInput = input.toLowerCase().replace(/["%","-","&","€","!","?","*","=","@","$","\n", "."]/g,",");
    var userKeywords = userInput.split(",");
}