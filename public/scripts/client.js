/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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

renderTweets(data);
});