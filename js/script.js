$(function(){
// Website addresses 
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

//get quote Ajax easy version
function getQuote() {
    console.log("Odpalono funkcję getQuote");
    $.getJSON(quoteUrl, createTweet);
}

//Tweeter
function createTweet(input) {
    
    console.log("Odpalono funkcję createTweet. Otrzymano:", data)
  
    var data = input[0];

    var quoteText = $(data.content).text().trim();
    var quoteAuthor = data.title;
  
    console.log("quoteText: "+quoteText)
    console.log("quoteAuthor: "+quoteAuthor)

  if (!quoteAuthor.length) {
      console.log("Autor nieznany... ustawiano  'Uknown author'")
      quoteAuthor = "Unknown author";
  }

  var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;
  console.log("Przygotowano tweetText - "+quoteText);

// check number of letters
  if (tweetText.length > 140) {
    console.log("tweeText jest za długi, odpalono ponownie getQuote")
    getQuote();
  } else {
    var tweet = tweetLink + encodeURIComponent(tweetText);
    console.log("Przygotowano link do TT, to "+tweet)
    $('.quote').text(quoteText);
    console.log("Do .quote wpisano "+quoteText)
    $('.author').text("Author: " + quoteAuthor);
    console.log("Do .author wpisano "+quoteAuthor)
    $('.tweet').attr('href', tweet);
    console.log("Do .tweet wpisano "+tweet)
     }
}
// quote generator
$(document).ready(function() {
    getQuote();
    $('.trigger').click(function() {
        console.log("Kliknieto trigger")
        getQuote();
    })
});
});
