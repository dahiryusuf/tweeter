$(document).ready(function() {
  const $input = $("textarea");
  const $counter = document.getElementById("counter");
  let index = 140;

  $input.on('keyup', function(event) {
    index = 140 - $(this).val().length;

  if (event.key === "Backspace") {
     index + 1;
    }

  if ($(this).val().length > 140) {
      $counter.style.color = "red";
      $counter.innerHTML = index;
    }
   else {
    $counter.style.color = "black";
    $counter.innerHTML = index;
    }
  });

  $("form").on("submit", function(event) {
    if ($(this).val().length > 139) {
    $counter.style.color = "red";
    }
    index = 140;
  });
});