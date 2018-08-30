var old_url = document.location.href;
var new_url = "";
var split_url = old_url.split("/");

document.getElementById("old-url").innerHTML = document.location.href;

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
  default:
    new_url = "No page to suggest. Try the suggestions below.";
}

document.getElementById("new-url").innerHTML = new_url;
