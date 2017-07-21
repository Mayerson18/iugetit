//index
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
});
