$(document).ready(function () {
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      let target = $(this.hash);
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 70,
        },
        1000
      );
    });
  });

  // Skill bar animation
  $(window).scroll(function () {
    $(".skill-bar").each(function () {
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop();

      if (position < scrollTop + windowHeight - 100) {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      }
    });
  });

  // Nav active state
  $(window).scroll(function () {
    let scrollPos = $(document).scrollTop();
    $("nav a").each(function () {
      let currLink = $(this);
      let refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos + 100 &&
        refElement.position().top + refElement.height() > scrollPos + 100
      ) {
        $("nav a").removeClass("active");
        currLink.addClass("active");
      }
    });
  });

  // Form submission
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    alert("Thank you for your message! I will respond shortly.");
    this.reset();
  });