const pathOneKeywords = {
    needToSearchKeywords: [
        "formula", "formulas", "constant", "constant", "function", "functions"
    ],
    forgotWhichKeywords: [
        "no", "dunno", "don't", "dont", "cannot", "cant", "can't"
    ]
}

const pathTwoKeywords = {
    contactKeywords: [
        "someone", "some one", "somebody", "contact", "help"
    ],
    whyContactKeywords: [
        "issue", "issues", "problem", "problems", "report", "reports", "bug", "bugs", 
        "mistake", "mistakes", "error", "errors", "improvement", "improvements", "suggestion", "suggestions",
        "feature", "features"
    ]
}

function returnBotAnswer(answer) {
    return "<div class='bot-message'>" + answer + "</div>";
}
function askToMakeChoices(choice1, choice2) {
    return "<div class='choice'>" + choice1 + "</div><div class='choice'>"+ choice2 + "</div>";
}

function searchFormulaOrConstant() {
    var conversationHtml = document.getElementById("conversation");
    conversationHtml += askToMakeChoices("Is it a formula.", "Is it a constant."); 
}

function searchContacts() {
    var conversationHtml = document.getElementById("conversation");
    conversationHtml = askToMakeChoices("Do you need to report a bug or issue?", ""); 
}

function restartConversation() {
    var conversationHtml = document.getElementById("conversation");
    conversationHtml = returnBotAnswer("Hi! I'm Gabry, how can I help you?"); 
    conversationHtml += askToMakeChoices("I need to find a specific constant or formula.", "I need to talk to someone.");
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
    var userInput = input.toLowerCase();
}