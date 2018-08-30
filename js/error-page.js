(function() {
  var old_url = document.location.href;
  var new_url = "";
  var split_url = old_url.split("/");

  switch (split_url[3]) {
    case "blog":
      new_url = '<a href="http://www.revisedcommonversion.com/pages/articles.html">http://www.revisedcommonversion.com/pages/articles.html</a>';
      break;
    case "devotional":
      new_url = '<a href="http://www.revisedcommonversion.com/pages/devotional/' + split_url[4] + '.html">http://www.revisedcommonversion.com/pages/devotional/' + split_url[4] + '.html</a>';
      break;
    case "genesis":
      new_url = '<a href="http://www.revisedcommonversion.com/text/genesis/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/genesis/' + split_url[4] + '.html</a>';
      break;
      case "exodus":
      new_url = '<a href="http://www.revisedcommonversion.com/text/exodus/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/exodus/' + split_url[4] + '.html</a>';
      break;
    default:
      new_url = "No page to suggest for " + old_url + ". See below.";
  }

  document.getElementById("new-url").innerHTML = new_url;
})();
