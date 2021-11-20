$(document).ready(function() {
  const $input = $("textarea");
  const $counter = document.getElementById("counter");
  let index = 140;

  $input.on('keydown', function(event) {
    let key = event.key;
    
    if ($(this).serialize().length === 5) {
      index = 140;
      $counter.style.color = "black";
    }
    if (index <= 0  && key !== "Backspace") {
      index--;
      $counter.style.color = "red";
      $counter.innerHTML = index;
    }
    if (key === "Backspace" && $(this).serialize().length !== 5) {
      index++;
      $counter.style.color = "black";
      $counter.innerHTML = index;
    }
    if (index > 0 && key !== "Backspace") {
      index--;
      $counter.innerHTML = index;
    }
  });
});