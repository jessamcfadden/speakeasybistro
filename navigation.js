$(document).ready(function() {
   $("#topbar li").prepend("<span></span>"); 
   
   $("#topbar li").each(function() { 
      var links = $(this).find("a").html(); 
      $(this).find("span").show().html(links); 
   }); 
   
   $("#topbar li").hover(function() { 
      $(this).find("span").stop().animate({ 
         marginTop: "-40" }, 500);
      }, 
      function() { 
      $(this).find("span").stop().animate({
         marginTop: "0" }, 500);
      }
   );
});