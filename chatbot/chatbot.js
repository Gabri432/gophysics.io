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
        "issue", "issues", "problem", "problems", "report", "reports", "bug", "bugs", 
        "mistake", "mistakes", "error", "errors", "improvement", "improvements", "suggestion", "suggestions",
        "feature", "features", "trouble", "troubles"
    ],
    answer2Keywords: [
        "website", "library"
    ]
}

const questionsPath1 = [
    "Need to find a formula or constant?", 
    "Please type its name."
];
const questionsPath2 = [
    "Need to report a suggestion or bug?",
    "Do you have to report an issue with the website or the library?"
];

var lastAnsweredQuestion = "";

function returnBotAnswer(answer) {
    return "<br /><div class='bot-message'>" + answer + "</div>";
}

function redirectTo(botAnswer, link) {
    var conversationHtml = document.getElementById("conversation");
    conversationHtml.insertAdjacentHTML( 'beforeend', returnBotAnswer(botAnswer));
    delay(3000).then(() => window.location.href = link);
}

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
    return "<br /><div class='user-message'>" + text + "</div>";
}

function filterInput(text) {
    var userInput = text.replace(/["%","-","&","€","!","?","*","=","@","$"]/g,"");
    userInput = userInput.replace(/\./g, "").replace(/ /g, ",");
    return userInput
}

function handlingUserInput() {
    var input = document.getElementById("input-text").value;
    var conversationHtml = document.getElementById("conversation");
    conversationHtml.insertAdjacentHTML( 'beforeend', printUserInput(input) );
    var userKeywords = filterInput(input).split(",");
    if (lastAnsweredQuestion == "") {
        console.log(lastAnsweredQuestion);
        for (var keyword of userKeywords) {
            switch (keyword) {
                case searchKeyword(keyword, option1Keywords.answer1Keywords) != "":
                    lastAnsweredQuestion == questionsPath1[0];
                case searchKeyword(keyword, option2Keywords.answer1Keywords) != "":
                    lastAnsweredQuestion == questionsPath2[0];
            }
        }
    } 
    console.log(lastAnsweredQuestion);
    switch (lastAnsweredQuestion) {
        case questionsPath1[0]:
            conversationHtml.insertAdjacentHTML( 'beforeend', returnBotAnswer(questionsPath1[1]))
            lastAnsweredQuestion == questionsPath1[1];
        case questionsPath2[0]:
            conversationHtml.insertAdjacentHTML( 'beforeend', returnBotAnswer(questionsPath2[1]))
            lastAnsweredQuestion == questionsPath2[1];
        case questionsPath1[1]:
            var response = "";
            for (var formula of option1Keywords.answer2FormulaKeywords) {
                if (userKeywords.includes(formula)) {
                    response = formula;
                    break;
                }
            }
            if (response == "") {
                for (var constant of option1Keywords.answer2ConstantKeywords) {
                    if (userKeywords.includes(constant)) {
                        response = constant;
                        break;
                    }
                }
            }
            redirectTo(
                "You will be redirected to the exact section of documentation of your interest in 3 seconds.",
                "https://gabri432.github.io/gophysics.io/routes/docs/docs.html#" + response
                )
        case questionsPath2[1]:
            if (userKeywords.includes("website")) {
                redirectTo(
                    "You will be redirected to the Github page of the website in 3 seconds.",
                    "https://github.com/Gabri432/gophysics.io/issues/new"
                    )
            } else if (userKeywords.includes("library") || userKeywords.includes("libraries")) {
                redirectTo(
                    "You will be redirected to the exact section of documentation of your interest in 3 seconds.",
                    "https://github.com/Gabri432/gophysics/issues/new"
                    )
            }
    }
    console.log(lastAnsweredQuestion);
}

window.addEventListener("DOMContentLoaded", function() {
    var clickButton = document.getElementById("clickButton");
    if (clickButton != null) {
        clickButton.addEventListener("click", handlingUserInput, false);
        clickButton.addEventListener("keypress", function(event) {
            if (event.Key == "Enter") {
                event.preventDefault()
                handlingUserInput()
            }
        });
    }
})