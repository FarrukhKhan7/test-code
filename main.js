$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    autoplay:true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    items: 1,
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // FORM VALIDATION
  $(function () {
    const fname = document.getElementById("first-name");
    const lname = document.getElementById("last-name");
    const email = document.getElementById("business-email");
    const company = document.getElementById("company");
    const country = document.getElementById("country");

    $("#btn-form").click(function () {
      if (fname.value.length < 1) {
        $('[data-toggle="tooltip1"]').tooltip("show");
        $(fname).addClass("active");
        fname.focus();
        return false;
      }

      if (lname.value.length < 1) {
        $('[data-toggle="tooltip2"]').tooltip("show");
        $(lname).addClass("active");
        lname.focus();
        return false;
      }

      if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        $('[data-toggle="tooltip3"]').tooltip("show");
        $(email).addClass("active");
        email.focus();
        return false;
      }

      if (company.value.length < 1) {
        $('[data-toggle="tooltip4"]').tooltip("show");
        $(company).addClass("active");
        company.focus();
        return false;
      }

      if (country.value == "") {
        $('[data-toggle="tooltip5"]').tooltip("show");
        $(country).addClass("active");
        country.focus();
        return false;
      }
      return true;
    });
  });

});

// FORM VAIDATION
const myFunction = (e) => {
  if (e.value.length >= 1) {
    $('[data-toggle="tooltip1"]').tooltip("dispose");
    $('[data-toggle="tooltip2"]').tooltip("dispose");
    $('[data-toggle="tooltip4"]').tooltip("dispose");
    $('[data-toggle="tooltip5"]').tooltip("dispose");
    $(e).removeClass("active");
  }
};

const emailFunction = (e)=>{
if(e.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
  $('[data-toggle="tooltip3"]').tooltip("dispose");
  $(e).removeClass("active");
}
}

// VIDEO FUNCTIONALITY
const playButton = document.getElementById("play");
const video = document.getElementById("video");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
  playButton.classList.toggle("clickstyle");
}

playButton.addEventListener("click", togglePlay);


