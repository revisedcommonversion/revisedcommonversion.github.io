$(document).ready(function(){
  $("#search-query").click(function(){
    $("#search-query").val("");
  });
  $("#bing-search-button").click(function(){
    if ($("#search-query").val().length > 0) {
      var bing_url = "https://www.bing.com/search?q=" + $("#search-query").val() + "+site%3Arevisedcommonversion.com";
      window.location = bing_url;
    }
    else {
      alert("Please provide a search query.");
    }
  });
  $("#duck-search-button").click(function(){
    if ($("#search-query").val().length > 0) {
      var duck_url = "https://duckduckgo.com/?q=" + $("#search-query").val() + "+site%3Awww.revisedcommonversion.com&ia=web";
      window.location = duck_url;
    }
    else {
      alert("Please provide a search query.");
    }
  });
  $("#ecosia-search-button").click(function(){
    if ($("#search-query").val().length > 0) {
      var ecosia_url = "https://www.ecosia.org/search?q=" + $("#search-query").val() + "%20site%3Arevisedcommonversion.com";
      window.location = ecosia_url;
    }
    else {
      alert("Please provide a search query.");
    }
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
    Bing: https://www.bing.com/search?q=propitiation+site%3Arevisedcommonversion.com
    DuckDuckGo: https://duckduckgo.com/?q=propitiation+site%3Awww.revisedcommonversion.com&ia=web
    Ecosia: https://www.ecosia.org/search?q=propitiation%20site%3Arevisedcommonversion.com
*/
