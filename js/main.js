const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
let time = 1800; //30 минут
const times = () => {
     const minutes = Math.floor(time / 60);
     let seconds = time % 60;
     if (seconds < 10) {
          seconds = "0" + seconds;
     }
     if (minutes < 10) {
          minutes = "0" + minutes;
     }
     minute.innerHTML = `${minutes}`;
     second.innerHTML = `${seconds}`;
     time--;
};

setInterval(times, 1000);

$(document).ready(function () {
     $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: true,
          responsive: {
               0: {
                    items: 1,
               },
               600: {
                    items: 2,
               },
               1000: {
                    items: 3,
               },
          },
     });
     $(".btn").click(() => {
          $("html, body").animate(
               {
                    scrollTop: $(".cta").offset().top,
               },
               1000
          );
     });
});
