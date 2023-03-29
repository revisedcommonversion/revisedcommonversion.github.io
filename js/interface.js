$(document).ready(function(){
    // Site navigation menu.
    $("#main-menu").change(function(){
    url = $(this).val();
    if (url) {
      window.location.href = url;
    }
  });

  // Dismiss button on the green message boxes.
  $(".dismiss").click(function(){
    $(this).parent().fadeOut();
  });
});
