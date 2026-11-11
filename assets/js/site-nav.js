/* The top bar's Menu button, below 782px. The same behavior as the budget site's
   (BetaNYC/New-York-City-Budget, viz/site_shell.py): show the button, hide the
   links until it is opened, keep aria-expanded true to the state, and close on
   Escape. Without this script the button stays hidden and the links wrap.
   It fetches nothing. */
(function () {
  function init() {
    var nav = document.querySelector(".site-nav");
    var btn = nav && nav.querySelector(".menu-btn");
    var list = nav && document.getElementById(btn ? btn.getAttribute("aria-controls") : "");
    if (!btn || !list) return;
    nav.classList.add("js");
    btn.hidden = false;
    function set(open) {
      list.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", function () {
      set(btn.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        set(false);
        btn.focus();
      }
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
