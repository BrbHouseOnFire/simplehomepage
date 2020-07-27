
$(".intro").addClass("go");
$(".reload").click(() => {
  $(".intro")
    .removeClass("go")
    .delay(200)
    .queue(next => {
      $(".intro").addClass("go");
      next();
    });
});
let flip = 2;
$(".disableParticles").click(() => {
  flip++;
  if (flip % 2 === 1) {
    document.getElementById("particles-js").style.visibility = "hidden";
    // document.getElementById("particles-js").style.display = "none";
  }
  else {
    document.getElementById("particles-js").style.visibility = "visible";
    // document.getElementById("particles-js").style.display = "inline";
  }
});