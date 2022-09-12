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
    conversationHtml = returnBotAnswer("Ok, why you need to talk to someone?")
    conversationHtml += askToMakeChoices("I need to report a bug or a suggestion for improvement.", "I just want to talk with the developer."); 
}

function returnLinkedin() {
    conversationHtml = returnBotAnswer("You will be redirected to Linkedin within 3 seconds.")
    delay(3000).then(() => window.location.href = "https://www.linkedin.com/in/gabriele-gatti-87b321190");
}

function returnGithub() {
    conversationHtml = returnBotAnswer("You will be redirected to Github within 3 seconds.")
    delay(3000).then(() => window.location.href = "https://github.com/Gabri432/gophysics/issues/new");
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
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
    var userInput = input.toLowerCase().replace(/["%","-","&","€","!","?","*","=","@","$","\n", "."]/g,",");
    var userKeywords = userInput.split(",");
}