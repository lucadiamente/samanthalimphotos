$(document).on("scroll", () => {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    if (
      document.getElementById("about").classList.contains("visible") &&
      document.getElementById("portfolio").classList.contains("visible") &&
      document.getElementById("contact").classList.contains("visible")
    ) {
      return;
    } else {
      var tag = tags[i];
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  }
});
