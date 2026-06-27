function entrar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("home").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  var done = false;
  function run() {
    if (done) return;

    done = true;
    document.querySelectorAll(".cn").forEach(function (el) {
      var n = +el.dataset.n,
        i = 0,
        t = setInterval(function () {
          i += Math.ceil(n / 40);
          if (i >= n) {
            i = n;
            clearInterval(t);
          }
          el.textContent = i;
        }, 25);
    });
  }
  var h = document.getElementById("home");
  var obs = new MutationObserver(function () {
    if (h.style.display !== "none") run();
  });

  obs.observe(h, { attributes: true });
});
