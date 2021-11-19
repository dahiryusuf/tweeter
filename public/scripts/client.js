/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  
  const renderTweets = function(tweets) {
   let $tweets = {}; 
    for(let i of tweets){
     $tweets =  createTweetElement(i)
      $('#tweets-container').append($tweets);
    }
    
  }
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
const createTweetElement = (Data) => {
  const $tweet = $( `<article class = "tweet"> 
  <header>
    <label> <img src="${Data.user.avatars}"> ${Data.user.name} </label>
    <label> ${Data.user.handle} </label>
  </header>
  <footer>
   <label id = "text" for="tweet"> ${Data.content.text}</label>
   <hr>
   <div>
   <p id = "time">${timeago.format(Data.created_at)}</p>
   <p><i class="fa fa-flag"></i><i class="fa fa-retweet"></i><i class="fa fa-heart"></i></p>
  </div>
  </footer>
  </article>`);
  return $tweet;
}
const loadTweets = () => {
  $.ajax('/tweets', { method: 'GET' })
  .then(function (data) {
    renderTweets(data);
  });
}
  const loadNewTweets = () => {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (data) {
      let len = data.length - 1;
      let k = createTweetElement(data[len]);
       $('#tweets-container').append(k);
   
    });
  
}
$("form").on("submit", function (event) {
  event.preventDefault();
  const $input = document.getElementById("tweet-text");
  if($( this ).serialize().length === 5){
    $("#error").html("⚠️ Your tweet can't be empty tell us whats on your mind! ⚠️");
    $("#error").hide();
   return $("#error").slideDown("slow");
  }
  if($( this ).serialize().length > 145){
    $("#error").html("⚠️ Sorry your tweet is above our limit ⚠️");
    $("#error").hide();
    return $("#error").slideDown("slow");
   
  }
  $("#error").slideUp("slow");
  $.post( "/tweets", $( this ).serialize() );
  // $input.value = "";
  loadNewTweets()
  });
  loadTweets();
});