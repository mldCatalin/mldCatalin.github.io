var settings = {
    "url": "https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=AIzaSyDaiGbcNwbBz-qTAp-t4l4a22RilkUkOnA",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
    "data": "",
    "dataType": "json",
    "success": handleResponse,
    "error": handleError
};

var POSTReqData = { "document": { "type": "PLAIN_TEXT", "language": "en", "content": "" }, "encodingType": "UTF32" };

function callSentimentAnalysis() {
    var userInput = document.getElementById("text_field").value;
    if(userInput === "" || userInput === null){
        alert("Make sure you type something before submitting.\r\nThank you");
        return;
    }

    POSTReqData.document.content = document.getElementById("text_field").value;
    this.settings.data = JSON.stringify(POSTReqData);

    $.ajax(settings).done(function (response) { });
}

function handleResponse(response) {
    displayAggregatedSentimentScore(response);
    //displaySentencesSentimentMagnitudeAndScore(response);
}

function displayAggregatedSentimentScore(response) {
    clearBox('overall_sentiment_analysis_response');
    var sentimentScore = parseFloat(JSON.stringify(response.documentSentiment.score));
    var statement;

    switch (true) {
        case inRange(REACTIONS.WORST.MIN, REACTIONS.WORST.MAX, sentimentScore):
            statement = STATEMENT_WORST;
            break;
        case inRange(REACTIONS.BAD.MIN, REACTIONS.BAD.MAX, sentimentScore):
            statement = STATEMENT_BAD;
            break;
        case inRange(REACTIONS.NEUTRAL.MIN, REACTIONS.NEUTRAL.MAX, sentimentScore):
            statement = STATEMENT_NEUTRAL;
            break;
        case inRange(REACTIONS.GOOD.MIN, REACTIONS.GOOD.MAX, sentimentScore):
            statement = STATEMENT_GOOD;
            break;
        case inRange(REACTIONS.BEST.MIN, REACTIONS.BEST.MAX, sentimentScore):
            statement = STATEMENT_BEST;
            break;
    }

    $('#overall_sentiment_analysis_response').append(statement).append("<br>");
}

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

function handleError(response) {
    console.log(JSON.stringify(response));
    alert("Ooops! Something went wrong :(\r\nMake sure you are using English.\r\nRefresh page and try again\r\nSorry for the incvenience.");
}

function inRange(low, high, x) {
    return ((x - high) * (x - low) <= 0);
}

/*
function displaySentencesSentimentMagnitudeAndScore(response) {
    var magnitudeStatement = "Your aggregated Sentiment Magnitude is: ";
    var scoreStatement = "Your aggregated Sentiment Score is: ";
    var iterator = 0;

    while (response.sentences[iterator] != null) {
        var sentence = JSON.stringify(response.sentences[iterator].text.content)
        var score = response.sentences[iterator].sentiment.score;
        var magnitude = response.sentences[iterator].sentiment.magnitude;
        $('#sentences_sentiment_analysis_response').append("For: ").append(sentence).append("<br>").
            append(magnitudeStatement).append(magnitude).append("<br>").
            append(scoreStatement).append(score).append("<br>");
        iterator++;
    }
}
*/