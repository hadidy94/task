$(window).load(function () {
  $(document).ready(function () {
    $(".dropdown").hover(
      function () {
        $(this)
          .find(".dropdown-menu")
          .stop(true, true)
          .delay(50)
          .slideDown(100);
      },
      function () {
        $(this)
          .find(".dropdown-menu")
          .stop(true, true)
          .delay(50)
          .slideUp(100);
      }
    );
  });

  document.querySelector(".searchBtn").addEventListener("click", function () {
    document.querySelector(".searchform").classList.toggle("active");
  });
 
  $(".top-slider").owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    margin: 20,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".gate-slider").owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-right'></i>",
      "<i class='fa fa-angle-left'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });



  $(".dean-carousel").owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    margin: 20,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-angle-right fa-lg'></i>",
      "<i class='fa fa-angle-left fa-lg'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  $(".advertise-carousel").owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-right fa-2x'></i>",
      "<i class='fa fa-angle-left fa-2x'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  $(".articles-carousel").owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    margin: 15,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-angle-right fa-2x'></i>",
      "<i class='fa fa-angle-left fa-2x'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  $(".multimedia-owl").owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    margin: 15,
    dots: true,
    nav: false,
    responsiveClass: true,
    navText: [
      "<i class='fa fa-angle-right fa-2x'></i>",
      "<i class='fa fa-angle-left fa-2x'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  $(".cerificate-carousel").owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    margin: 8,
    dots: true,

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  });


  $(".partners-carousel").owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    margin: 15,
    dots: false,

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 6
      }
    }
  });




  $('a[href="#home"]')
    .on("shown.bs.tab", function () {
      initialize_owl($('#owl1'));
    })
    .on("hide.bs.tab", function () {
      destroy_owl($('#owl1'));
    });

  $('a[href="#profile"]')
    .on("shown.bs.tab", function () {
      initialize_owl($('#owl2'));
    })
    .on("hide.bs.tab", function () {
      destroy_owl($('#owl2'));
    });

  $('a[href="#messages"]')
    .on("shown.bs.tab", function () {
      initialize_owl($('#owl3'));
    })
    .on("hide.bs.tab", function () {
      destroy_owl($('#owl3'));
    });

  function initialize_owl(el) {
    el.owlCarousel({
      loop: true,
      rtl: true,
      nav: false,
      margin: 8,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 4,

        }
      }
    });
  }

  function destroy_owl(el) {
    el.trigger("destroy.owl.carousel");
    el.find(".owl-stage-outer")
      .children(":eq(0)")
      .unwrap();
  }


});
