$(document).ready(function(){
  $("#search-query").click(function(){
    $("#search-query").val("");
  });
  $("#duck-search-button").click(function(){
    var duck_url = "https://duckduckgo.com/?q=" + $("#search-query").val() + "+site%3Awww.revisedcommonversion.com&ia=web";
    window.location = duck_url;
  });
  $("#google-search-button").click(function(){
    var search_url = "https://www.revisedcommonversion.com/pages/results.html?q=" + $("#search-query").val();
    window.location = search_url;
  });
  $(document).keypress(
    function(event){
      if (event.which == '13') {
        event.preventDefault();
      }
  });
});

/*
  Example search links:
    DuckDuckGo: https://duckduckgo.com/?q=propitiation+site%3Awww.revisedcommonversion.com&ia=web
    Google: https://www.google.com/search?q=site%3Awww.revisedcommonversion.com+propitiation
*/
