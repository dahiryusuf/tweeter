// $(document).ready(() => {

//   let $counter = $("counter")
//   const $ran = $("tweet-text")
//   const $input = $("textarea");
  
//   let index = 140;
//   const empty = " ";
//   $input.on('keyup', function() {
//     console.log($counter)
//     index--;

//   });

// });
$(document).ready(function() {
  const $input = $("textarea");
  const $counter = document.getElementById("counter");
  const $counter2 = document.getElementById("counter2");
  let index = 140

  $input.on('keypress', function() {
    if(index < 0){
      index--;
      $counter.style.color = "red";
      $counter.innerHTML = index;
    } else {
    index--;
    $counter.innerHTML = index;
    }
  });
});