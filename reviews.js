$(document).ready(function () {
   $('#reviewtoggle li').click(function () {
      var text = $(this).children('div.content');
      if (text.is(':hidden')) {
         text.slideToggle(1500);
         $(this).children('span').html('Read Review');   
      } 
      else {
         text.slideToggle(1500);
            $(this).children('span').html('Read Review');   
      }
   });
});

