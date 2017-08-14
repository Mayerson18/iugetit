//index
"use strict";

$(document).ready(function() {

  $(".nav-toggle").click(function() {
    if($(this).hasClass("is-active")){
      $(this).removeClass("is-active")
    }else{
      $(this).addClass("is-active")
    }
    if($(".nav-menu").hasClass("is-active")){
      $(".nav-menu").removeClass("is-active");
      $(".nav-menu").children().removeClass("r");
    }else{
      $(".nav-menu").addClass("is-active");
      $(".nav-menu").children().addClass("r");
    }
  });

  $(".nav-item").click(function() {
    $(".nav-menu").removeClass("is-active")
    $(".nav-toggle").removeClass("is-active")
    $(window).scrollTop(500)
  });

  $(".owl-next").click(function(){
    $(".owl-item.active").find('.item').find("a")[0].click();
  });

  $(".owl-prev").click(function(){
    $(".owl-item.active").find('.item').find("a")[0].click();
  });

  var name = "Jose Medina"
  $(".f1em").first().parent().css("flex-direction","column").append(`<span style="font-size:1.2em;padding-left:1em;">${name}</span>`)

});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
       })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
       ga('create', '', 'auto');/* */
       ga('send', 'pageview');
