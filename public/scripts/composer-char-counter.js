$(document).ready(function() {
  const $input = $("textarea");
  const $counter = document.getElementById("counter");
  let index = 140;

  $input.on('keypress', function(event) {
    console.log($(this).val().length);
  if (index <= 0) {
      index--;
      $counter.style.color = "red";
      $counter.innerHTML = index;
    }
   else {
    index--;
    $counter.innerHTML = index;
    }
  });

  $("form").on("submit", function(event) {
    if ($(this).val().length <= 139) {
    index = 140;
    }
  });
});