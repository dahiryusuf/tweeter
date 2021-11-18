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
const loadTweets = (check) => {
  $.ajax('/tweets', { method: 'GET' })
  .then(function (data) {
    const len = data.length - 1;
    if(check){
      createTweetElement(data[len]);
    }
    renderTweets(data)
  });
  
}
$("form").on("submit", function (event) {
  event.preventDefault();
  const $input = document.getElementById("tweet-text");
  if($( this ).serialize().length === 5){
    return alert("Tweet can not be empty")
  }
  if($( this ).serialize().length > 145){
    return alert("Tweet is to large")
  }
  $.post( "/tweets", $( this ).serialize() );
  $input.value = "";
  loadTweets(1)
  });
  loadTweets();
});