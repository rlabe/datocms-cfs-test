
  <!-- cards carousel -->
    $(document).ready(function($) {
      $("#card-carousel").owlCarousel();
    });
    $("body").data("page", "frontpage");

  <!-- image carousel -->
    $(document).ready(function() {
      $("#image-carousel-desktop").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
      });

    });

    $(document).ready(function() {
      $("#image-carousel-mobile").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
      });

    });

  <!-- posts carousel -->
    $(document).ready(function() {
      $("#posts-carousel").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
      });

    });

  <!-- posts carousel 3col -->
    $(document).ready(function() {
      $("#posts-carousel-3col").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
      });

    });

  <!-- image slider -->
    $(document).ready(function() {
      $("#image-slider").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

      });
    });

  <!-- testimonial carousel -->
    $(document).ready(function() {
      $("#single-testimonial-item").owlCarousel({
        items: 1,
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

      });
    });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })

  <!-- / javascript -->