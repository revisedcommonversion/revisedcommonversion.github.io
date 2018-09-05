$(document).ready(function(){
  $("#main-menu").change(function(){
    url = $(this).val();
    if (url) {
      window.location.href = url;
    }
  });
});
