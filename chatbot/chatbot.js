const option1Keywords = {
    answer1Keywords: [
        "formula", "formulas", "constant", "constant", "function", "functions"
    ],
    answer2FormulaKeywords: ["Acceleration", "AngularFreq", "CentripetalAccel", "CentripetalForce", "Density", "DopplerCloser", 
        "DopplerFarer", "ElectricField", "ElectricPotentDiff", "ElectricPotentEnergyDiff", "EnergyDens", "EnergyDensity", "EscapeSpeed",
        "Force", "Frequency", "GaussFlux", "GravAttract", "GravField", "HeatFlux", "Intensity", "LawCoulomb", "LawGayLussacPressure", "LawGayLussacVolume",
        "LawHagenPoiseuille", "LawOhm1", "LawOhm2", "LawStokes", "LorentzFactor", "MechanicalEner", "Momentum", "NeatHeatEnergyTransfer",
        "NormalForce", "PendulumPeriod", "PhotoElettricEffect", "PotentialElasticEner", "PotentialEner", "PotentialGravEner", "PotentialGravEner2",
        "Power", "Pressure", "ProjectileFlightTime", "ProjectileMaxHeight", "ProjectileMaxRange", "RelativDist", "RelativMass", "RelativMomentum",
        "RelativTime", "Resistance", "Time", "Voltage", "Work"
    ],
    answer2ConstantKeywords: ["absZero", "airConductivity", "airDensity", "angstrom", "atm", "atomicMass", "au", "avogadro", "c",
        "copperConductivity", "copperResistivity", "dielettric", "earthMass", "earthRadius", "electronMass", "elemCharge", "G", 
        "goldConductivity", "gravity", "heliumMass", "hubble", "ironConductivity", "ironResistivity", "lightYear", "moonMass",
        "moonRadius", "neutronMass", "parsec", "planck", "planckMass", "planckTime", "proportConst", "protonMass", "R", "silverResistivity",
        "sound", "steelResistivity", "stefBoltz", "sunMass", "sunRadius", "tesla", "thermCoeffExpansion", "vacuumPermeability", "waterDensity", 
        "waterViscosity0", "waterViscosity20", "weber"
    ]
}

const option2Keywords = {
    answer1Keywords: [
        "someone", "some one", "somebody", "contact", "help"
    ],
    answer2Keywords: [
        "website", "library"
    ],
    answer3Keywords: [
        "issue", "issues", "problem", "problems", "report", "reports", "bug", "bugs", 
        "mistake", "mistakes", "error", "errors", "improvement", "improvements", "suggestion", "suggestions",
        "feature", "features", "trouble", "troubles"
    ]
}

const questionsPath1 = ["Are you looking for a formula or a constant?", "Please type the name of the function/formula or constant."];
const questionsPath2 = [
    "Do you need to make a suggestion/report or just talk to the developer?",
    "Do you have to report an issue with the website or the library?"
];

const option1 = {
    question: questionsPath1[0],
    answer1: "itIsFormula",
    answer2: "itIsConstant"
};
const option2 = {
    question: questionsPath2[0],
    answer1: {
        question: questionsPath2[1],
        subpath1: "websiteIssue",
        subpath2: "libraryIssue"

    },
    answer2: "justTalk"
};

const userPossibilities = [option1, option2];

function returnBotAnswer(answer) {
    return "<div class='bot-message'>" + answer + "</div>";
}

function redirectTo(botAnswer, link) {
    conversationHtml += returnBotAnswer(botAnswer)
    delay(3000).then(() => window.location.href = link);
}
//https://github.com/Gabri432/gophysics/issues/new
//https://github.com/Gabri432/gophysics.io/issues/new
//https://www.linkedin.com/in/gabriele-gatti-87b321190

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
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

function printUserInput(text) {
    return "<div class='user-message'>" + text + "</div>";
}

function filterInput(text) {
    var nonUsefulKeywords = /["the", "i", "am", "is", "isn't", "are", "aren't", "it", "was", "were", "looking", "for", "need", "to", "find", "a"]/g
    var cleanerInput = text.toLowerCase().replace(nonUsefulKeywords, "");
    var userInput = cleanerInput.replace(/["%","-","&","€","!","?","*","=","@","$","\n", "."]/g,"").replace(/[" "]/g, ",");
    console.log(userInput);
    return userInput
}

function findKeywordsAnswer1(userKeywords) {
    for (var keyword of userKeywords) {
        var keywordOpt1 = searchKeyword(keyword, option1Keywords.answer1Keywords);
        var keywordOpt2 = searchKeyword(keyword, option2Keywords.answer1Keywords);
        if (keywordOpt1 != "") {
            return {questionAnswered: option1.question, answer: keywordOpt1};
        } else if (keywordOpt2 != "") {
            return {questionAnswered: option2.question, answer: keywordOpt2};
        }
    }
    return {questionAnswered: "", answer: ""};;
}

function findKeywordsAnswer2(userKeywords) {
    for (var keyword of userKeywords) {
        var keywordOpt1 = searchKeyword(keyword, option1Keywords.answer1Keywords);
        var keywordOpt2 = searchKeyword(keyword, option2Keywords.answer1Keywords);
        if (keywordOpt1 != "") {
            return {questionAnswered: option1.question, answer: keywordOpt1};
        } else if (keywordOpt2 != "") {
            return {questionAnswered: option2.question, answer: keywordOpt2};
        }
    }
    return {questionAnswered: "", answer: ""};;
}

function handleUserInput() {
    var input = document.getElementById("input-text").value;
    var conversationHtml = document.getElementById("conversation");
    conversationHtml += printUserInput(input);
    var userKeywords = filterInput(input).split(",");
    var response1 = findKeywordsAnswer1(userKeywords);
    switch (response1) {}
}