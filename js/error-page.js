(function() {
  var old_url = document.location.href;
  var new_url = "";
  var split_url = old_url.split("/");

  switch (split_url[3]) {
    case "blog":
      new_url = '<a href="http://www.revisedcommonversion.com/pages/articles.html">http://www.revisedcommonversion.com/pages/articles.html</a>';
      break;
    case "glossary":
      new_url = '<a href="http://www.revisedcommonversion.com/pages/glossary.html">http://www.revisedcommonversion.com/pages/glossary.html</a>';
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
    case "leviticus":
      new_url = '<a href="http://www.revisedcommonversion.com/text/leviticus/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/leviticus/' + split_url[4] + '.html</a>';
      break;
    case "numbers":
      new_url = '<a href="http://www.revisedcommonversion.com/text/numbers/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/numbers/' + split_url[4] + '.html</a>';
      break;
    case "deuteronomy":
      new_url = '<a href="http://www.revisedcommonversion.com/text/deuteronomy/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/deuteronomy/' + split_url[4] + '.html</a>';
      break;
    case "joshua":
      new_url = '<a href="http://www.revisedcommonversion.com/text/joshua/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/joshua/' + split_url[4] + '.html</a>';
      break;
    case "judges":
      new_url = '<a href="http://www.revisedcommonversion.com/text/judges/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/judges/' + split_url[4] + '.html</a>';
      break;
    case "ruth":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ruth/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/ruth/' + split_url[4] + '.html</a>';
      break;
    case "1samuel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1samuel/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/1samuel/' + split_url[4] + '.html</a>';
      break;
    case "2samuel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2samuel/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/2samuel/' + split_url[4] + '.html</a>';
      break;
    case "1kings":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1kings/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/1kings/' + split_url[4] + '.html</a>';
      break;
    case "2kings":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2kings/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/2kings/' + split_url[4] + '.html</a>';
      break;
    case "1chronicles":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1chronicles/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/1chronicles/' + split_url[4] + '.html</a>';
      break;
    case "2chronicles":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2chronicles/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/2chronicles/' + split_url[4] + '.html</a>';
      break;
    case "ezra":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ezra/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/ezra/' + split_url[4] + '.html</a>';
      break;
    case "nehemiah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/nehemiah/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/nehemiah/' + split_url[4] + '.html</a>';
      break;
    case "esther":
      new_url = '<a href="http://www.revisedcommonversion.com/text/esther/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/esther/' + split_url[4] + '.html</a>';
      break;
    case "job":
      new_url = '<a href="http://www.revisedcommonversion.com/text/job/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/job/' + split_url[4] + '.html</a>';
      break;
    case "psalms":
      new_url = '<a href="http://www.revisedcommonversion.com/text/psalms/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/psalms/' + split_url[4] + '.html</a>';
      break;
    case "proverbs":
      new_url = '<a href="http://www.revisedcommonversion.com/text/proverbs/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/proverbs/' + split_url[4] + '.html</a>';
      break;
    case "ecclesiastes":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ecclesiastes/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/ecclesiastes/' + split_url[4] + '.html</a>';
      break;
    case "song":
      new_url = '<a href="http://www.revisedcommonversion.com/text/song/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/song/' + split_url[4] + '.html</a>';
      break;
    case "isaiah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/isaiah/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/isaiah/' + split_url[4] + '.html</a>';
      break;
    case "jeremiah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/jeremiah/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/jeremiah/' + split_url[4] + '.html</a>';
      break;
    case "lamentations":
      new_url = '<a href="http://www.revisedcommonversion.com/text/lamentations/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/lamentations/' + split_url[4] + '.html</a>';
      break;
    case "ezekiel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ezekiel/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/ezekiel/' + split_url[4] + '.html</a>';
      break;
    case "daniel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/daniel/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/daniel/' + split_url[4] + '.html</a>';
      break;
    case "hosea":
      new_url = '<a href="http://www.revisedcommonversion.com/text/hosea/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/hosea/' + split_url[4] + '.html</a>';
      break;
    case "joel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/joel/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/joel/' + split_url[4] + '.html</a>';
      break;
    case "amos":
      new_url = '<a href="http://www.revisedcommonversion.com/text/amos/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/amos/' + split_url[4] + '.html</a>';
      break;
    case "obadiah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/obadiah/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/obadiah/' + split_url[4] + '.html</a>';
      break;
    case "jonah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/jonah/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/jonah/' + split_url[4] + '.html</a>';
      break;
    case "micah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/micah/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/micah/' + split_url[4] + '.html</a>';
      break;
    case "nahum":
      new_url = '<a href="http://www.revisedcommonversion.com/text/nahum/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/nahum/' + split_url[4] + '.html</a>';
      break;
    case "habakkuk":
      new_url = '<a href="http://www.revisedcommonversion.com/text/habakkuk/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/habakkuk/' + split_url[4] + '.html</a>';
      break;
    case "zephaniah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/zephaniah/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/zephaniah/' + split_url[4] + '.html</a>';
      break;
    case "haggai":
      new_url = '<a href="http://www.revisedcommonversion.com/text/haggai/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/haggai/' + split_url[4] + '.html</a>';
      break;
    case "zechariah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/zechariah/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/zechariah/' + split_url[4] + '.html</a>';
      break;
    case "malachi":
      new_url = '<a href="http://www.revisedcommonversion.com/text/malachi/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/malachi/' + split_url[4] + '.html</a>';
      break;
    case "matthew":
      new_url = '<a href="http://www.revisedcommonversion.com/text/matthew/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/matthew/' + split_url[4] + '.html</a>';
      break;
    case "mark":
      new_url = '<a href="http://www.revisedcommonversion.com/text/mark/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/mark/' + split_url[4] + '.html</a>';
      break;
    case "luke":
      new_url = '<a href="http://www.revisedcommonversion.com/text/luke/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/luke/' + split_url[4] + '.html</a>';
      break;
    case "john":
      new_url = '<a href="http://www.revisedcommonversion.com/text/john/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/john/' + split_url[4] + '.html</a>';
      break;
    case "acts":
      new_url = '<a href="http://www.revisedcommonversion.com/text/acts/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/acts/' + split_url[4] + '.html</a>';
      break;
    case "romans":
      new_url = '<a href="http://www.revisedcommonversion.com/text/romans/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/romans/' + split_url[4] + '.html</a>';
      break;
    case "1corinthians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1corinthians/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/1corinthians/' + split_url[4] + '.html</a>';
      break;
    case "2corinthians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2corinthians/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/2corinthians/' + split_url[4] + '.html</a>';
      break;
    case "galatians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/galatians/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/galatians/' + split_url[4] + '.html</a>';
      break;
    case "ephesians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ephesians/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/ephesians/' + split_url[4] + '.html</a>';
      break;
    case "philippians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/philippians/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/philippians/' + split_url[4] + '.html</a>';
      break;
    case "colossians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/colossians/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/colossians/' + split_url[4] + '.html</a>';
      break;
    case "1thessalonians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1thessalonians/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/1thessalonians/' + split_url[4] + '.html</a>';
      break;
    case "2thessalonians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2thessalonians/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/2thessalonians/' + split_url[4] + '.html</a>';
      break;
    case "1timothy":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1timothy/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/1timothy/' + split_url[4] + '.html</a>';
      break;
    case "2timothy":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2timothy/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/2timothy/' + split_url[4] + '.html</a>';
      break;
    case "titus":
      new_url = '<a href="http://www.revisedcommonversion.com/text/titus/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/titus/' + split_url[4] + '.html</a>';
      break;
    case "philemon":
      new_url = '<a href="http://www.revisedcommonversion.com/text/philemon/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/philemon/' + split_url[4] + '.html</a>';
      break;
    case "hebrews":
      new_url = '<a href="http://www.revisedcommonversion.com/text/hebrews/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/hebrews/' + split_url[4] + '.html</a>';
      break;
    case "james":
      new_url = '<a href="http://www.revisedcommonversion.com/text/james/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/james/' + split_url[4] + '.html</a>';
      break;
    case "1peter":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1peter/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/1peter/' + split_url[4] + '.html</a>';
      break;
    case "2peter":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2peter/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/2peter/' + split_url[4] + '.html</a>';
      break;
    case "1john":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1john/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/1john/' + split_url[4] + '.html</a>';
      break;
    case "2john":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2john/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/2john/' + split_url[4] + '.html</a>';
      break;
    case "3john":
      new_url = '<a href="http://www.revisedcommonversion.com/text/3john/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/3john/' + split_url[4] + '.html</a>';
      break;
    case "jude":
      new_url = '<a href="http://www.revisedcommonversion.com/text/jude/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/jude/' + split_url[4] + '.html</a>';
      break;
    case "revelation":
      new_url = '<a href="http://www.revisedcommonversion.com/text/revelation/' + split_url[4] + '.html">http://www.revisedcommonversion.com/text/revelation/' + split_url[4] + '.html</a>';
      break;
    default:
      new_url = "No page to suggest for " + old_url + ". See below.";
  }

  document.getElementById("new-url").innerHTML = new_url;
})();
