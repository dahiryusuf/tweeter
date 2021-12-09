$(document).ready(function() {

  const renderTweets = function(tweets) {
    let $tweets = {};
    for (let i of tweets.reverse()) {
      $tweets = createTweetElement(i);
      $('#tweets-container').append($tweets);
    }

  };
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  const createTweetElement = (Data) => {
    const $tweet = $(`<article class = "tweet"> 
  <header>
    <label> <img src="${escape(Data.user.avatars)}"> ${escape(Data.user.name)} </label>
    <label> ${escape(Data.user.handle)} </label>
  </header>
  <footer>
   <label id = "text" for="tweet"> ${escape(Data.content.text)}</label>
   <hr>
   <div>
   <p id = "time">${escape(timeago.format(Data.created_at))}</p>
   <p><i class="fa fa-flag"></i><i class="fa fa-retweet"></i><i class="fa fa-heart"></i></p>
  </div>
  </footer>
  </article>`);
    return $tweet;
  };
  const loadTweets = () => {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(data) {
        renderTweets(data);
      });
  };
  const loadNewTweets = () => {
    let len = 0;
    $.ajax('/tweets', { method: 'GET' })
      .then(function(data) {
        len = data.length - 1;
        let ntweet = createTweetElement(data[len]);
        $('#tweets-container').prepend(ntweet);
      });

  };
  $("form").on("submit", function(event) {
    event.preventDefault();
    const $input = document.getElementById("tweet-text");
    const $counter = document.getElementById("counter");
    if ($(this).serialize().length === 5) {
      $("#error").html("⚠️ Your tweet can't be empty tell us whats on your mind! ⚠️");
      $("#error").hide();
      return $("#error").slideDown("slow");
    }
    if ($(this).serialize().length > 145) {
      $("#error").html("⚠️ Sorry your tweet is above our limit ⚠️");
      $("#error").hide();
      return $("#error").slideDown("slow");
    }
    $("#error").slideUp("slow");
    $.post("/tweets", $(this).serialize())
      .then(function() {
        loadNewTweets();
      });
    $input.value = "";
    $counter.innerHTML = 140;
    $counter.style.color = "black";
  });

  $("#newTweet").on("click", function() {
    const $input = document.getElementById("tweet-text");
    $input.focus();
  });
  loadTweets();
});