 $(document).ready(function () {
     $(".anchor").on("click", "a", function (event) {
         event.preventDefault();
         var id = $(this).attr('href'),
             top = $(id).offset().top;
         $('html, body').animate({
             scrollTop: top
         }, 2000);
     });
 });

 function getTimeRemaining(endtime) {
     var t = Date.parse(endtime) - Date.parse(new Date());
     var seconds = Math.floor((t / 1000) % 60);
     var minutes = Math.floor((t / 1000 / 60) % 60);
     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
     return {
         'total': t,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
     };
 }

 function initializeClock(id, endtime) {
     var clock = document.getElementById(id);
     var hoursSpan = clock.querySelector('.hours');
     var hoursSpan2 = clock.querySelector('.hours2');
     var minutesSpan = clock.querySelector('.minutes');
     var minutesSpan2 = clock.querySelector('.minutes2');
     var secondsSpan = clock.querySelector('.seconds');
     var secondsSpan2 = clock.querySelector('.seconds2');

     function updateClock() {
         var t = getTimeRemaining(endtime);
         var hour = ('0' + t.hours).slice(-2);
         var min = ('0' + t.minutes).slice(-2);
         var sec = ('0' + t.seconds).slice(-2);
         hoursSpan.innerHTML = (hour.charAt(0));
         hoursSpan2.innerHTML = (hour.charAt(1));

         minutesSpan.innerHTML = (min.charAt(0));
         minutesSpan2.innerHTML = (min.charAt(1));

         secondsSpan.innerHTML = (sec.charAt(0));
         secondsSpan2.innerHTML = (sec.charAt(1));
         //                console.log(hour1.charAt(0));
         if (t.total <= 0) {
             clearInterval(timeinterval);
         }
     }

     updateClock();
     var timeinterval = setInterval(updateClock, 1000);
 }
 var deadline = new Date();
 deadline.setHours(0, 0, 0, 0);
 deadline.setDate(deadline.getDate() + 1);
 document.addEventListener("DOMContentLoaded", initializeClock('clock', deadline));
 document.addEventListener("DOMContentLoaded", initializeClock('clock2', deadline));


 /****************Валидация данных*************************/
 var form = document.querySelector('#form');

 form.addEventListener('submit', function (e) {
     e.preventDefault();
     document.getElementById('form_answer').innerHTML = '';
     var myPhone = document.getElementById('phone').value;
     var phoneno = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
     var phoneno2 = /[0-9]{11}/;
     if (myPhone.match(phoneno)) {
         document.getElementById('form_answer').innerHTML = 'Номер корректен';
         return true;
     } else {
         if (myPhone.match(phoneno2)) {
             document.getElementById('form_answer').innerHTML = 'Номер корректен';
         } else {
             document.getElementById('form_answer').innerHTML = 'Неправильный номер';
             return false;
         }
     }
 })

//карусель

 $(function(){
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
