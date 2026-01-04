/*
  The Holy Bible: Revised Common Version
  Copyright (c) 2026 William Masopust
  http://www.revisedcommonversion.com
  The source code of the RCV text is available at http://source.rcv.xyz.

  This project and the accompanying materials are made available under the
  terms of the Eclipse Public License 2.0 which is available at
  https://www.eclipse.org/legal/epl-2.0/.

*/

(function() {
  var old_url = document.location.href;
  var new_url = "";
  var split_url = old_url.split("/");
  var chapter = "";
  var chapter_text = "chapter unknown";
  
  if (split_url[4]) {
    if (split_url[4].length < 6) {
      chapter = split_url[4];
      chapter_text = chapter;
    }
    else {
      chapter = split_url[3];
    }
  }

  switch (split_url[3]) {
    case "blog":
      new_url = '<a href="http://www.revisedcommonversion.com/pages/articles.html">http://www.revisedcommonversion.com/pages/articles.html</a>';
      break;
    case "glossary":
      new_url = '<a href="http://www.revisedcommonversion.com/pages/glossary.html">http://www.revisedcommonversion.com/pages/glossary.html</a>';
      break;
    case "devotional":
      new_url = '<a href="http://www.revisedcommonversion.com/pages/devotional/' + chapter + '.html">http://www.revisedcommonversion.com/pages/devotional/' + chapter + '.html</a>';
      break;
    case "genesis":
      new_url = '<a href="http://www.revisedcommonversion.com/text/genesis/' + chapter + '.html">http://www.revisedcommonversion.com/text/genesis/' + chapter + '.html</a>';
      break;
    case "exodus":
      new_url = '<a href="http://www.revisedcommonversion.com/text/exodus/' + chapter + '.html">http://www.revisedcommonversion.com/text/exodus/' + chapter + '.html</a>';
      break;
    case "leviticus":
      new_url = '<a href="http://www.revisedcommonversion.com/text/leviticus/' + chapter + '.html">http://www.revisedcommonversion.com/text/leviticus/' + chapter + '.html</a>';
      break;
    case "numbers":
      new_url = '<a href="http://www.revisedcommonversion.com/text/numbers/' + chapter + '.html">http://www.revisedcommonversion.com/text/numbers/' + chapter + '.html</a>';
      break;
    case "deuteronomy":
      new_url = '<a href="http://www.revisedcommonversion.com/text/deuteronomy/' + chapter + '.html">http://www.revisedcommonversion.com/text/deuteronomy/' + chapter + '.html</a>';
      break;
    case "joshua":
      new_url = '<a href="http://www.revisedcommonversion.com/text/joshua/' + chapter + '.html">http://www.revisedcommonversion.com/text/joshua/' + chapter + '.html</a>';
      break;
    case "judges":
      new_url = '<a href="http://www.revisedcommonversion.com/text/judges/' + chapter + '.html">http://www.revisedcommonversion.com/text/judges/' + chapter + '.html</a>';
      break;
    case "ruth":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ruth/' + chapter + '.html">http://www.revisedcommonversion.com/text/ruth/' + chapter + '.html</a>';
      break;
    case "1samuel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1samuel/' + chapter + '.html">http://www.revisedcommonversion.com/text/1samuel/' + chapter + '.html</a>';
      break;
    case "2samuel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2samuel/' + chapter + '.html">http://www.revisedcommonversion.com/text/2samuel/' + chapter + '.html</a>';
      break;
    case "1kings":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1kings/' + chapter + '.html">http://www.revisedcommonversion.com/text/1kings/' + chapter + '.html</a>';
      break;
    case "2kings":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2kings/' + chapter + '.html">http://www.revisedcommonversion.com/text/2kings/' + chapter + '.html</a>';
      break;
    case "1chronicles":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1chronicles/' + chapter + '.html">http://www.revisedcommonversion.com/text/1chronicles/' + chapter + '.html</a>';
      break;
    case "2chronicles":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2chronicles/' + chapter + '.html">http://www.revisedcommonversion.com/text/2chronicles/' + chapter + '.html</a>';
      break;
    case "ezra":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ezra/' + chapter + '.html">http://www.revisedcommonversion.com/text/ezra/' + chapter + '.html</a>';
      break;
    case "nehemiah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/nehemiah/' + chapter + '.html">http://www.revisedcommonversion.com/text/nehemiah/' + chapter + '.html</a>';
      break;
    case "esther":
      new_url = '<a href="http://www.revisedcommonversion.com/text/esther/' + chapter + '.html">http://www.revisedcommonversion.com/text/esther/' + chapter + '.html</a>';
      break;
    case "job":
      new_url = '<a href="http://www.revisedcommonversion.com/text/job/' + chapter + '.html">http://www.revisedcommonversion.com/text/job/' + chapter + '.html</a>';
      break;
    case "psalms":
      new_url = '<a href="http://www.revisedcommonversion.com/text/psalms/' + chapter + '.html">http://www.revisedcommonversion.com/text/psalms/' + chapter + '.html</a>';
      break;
    case "proverbs":
      new_url = '<a href="http://www.revisedcommonversion.com/text/proverbs/' + chapter + '.html">http://www.revisedcommonversion.com/text/proverbs/' + chapter + '.html</a>';
      break;
    case "ecclesiastes":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ecclesiastes/' + chapter + '.html">http://www.revisedcommonversion.com/text/ecclesiastes/' + chapter + '.html</a>';
      break;
    case "song":
      new_url = '<a href="http://www.revisedcommonversion.com/text/song/' + chapter + '.html">http://www.revisedcommonversion.com/text/song/' + chapter + '.html</a>';
      break;
    case "isaiah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/isaiah/' + chapter + '.html">http://www.revisedcommonversion.com/text/isaiah/' + chapter + '.html</a>';
      break;
    case "jeremiah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/jeremiah/' + chapter + '.html">http://www.revisedcommonversion.com/text/jeremiah/' + chapter + '.html</a>';
      break;
    case "lamentations":
      new_url = '<a href="http://www.revisedcommonversion.com/text/lamentations/' + chapter + '.html">http://www.revisedcommonversion.com/text/lamentations/' + chapter + '.html</a>';
      break;
    case "ezekiel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ezekiel/' + chapter + '.html">http://www.revisedcommonversion.com/text/ezekiel/' + chapter + '.html</a>';
      break;
    case "daniel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/daniel/' + chapter + '.html">http://www.revisedcommonversion.com/text/daniel/' + chapter + '.html</a>';
      break;
    case "hosea":
      new_url = '<a href="http://www.revisedcommonversion.com/text/hosea/' + chapter + '.html">http://www.revisedcommonversion.com/text/hosea/' + chapter + '.html</a>';
      break;
    case "joel":
      new_url = '<a href="http://www.revisedcommonversion.com/text/joel/' + chapter + '.html">http://www.revisedcommonversion.com/text/joel/' + chapter + '.html</a>';
      break;
    case "amos":
      new_url = '<a href="http://www.revisedcommonversion.com/text/amos/' + chapter + '.html">http://www.revisedcommonversion.com/text/amos/' + chapter + '.html</a>';
      break;
    case "obadiah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/obadiah/' + chapter + '.html">http://www.revisedcommonversion.com/text/obadiah/' + chapter + '.html</a>';
      break;
    case "jonah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/jonah/' + chapter + '.html">http://www.revisedcommonversion.com/text/jonah/' + chapter + '.html</a>';
      break;
    case "micah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/micah/' + chapter + '.html">http://www.revisedcommonversion.com/text/micah/' + chapter + '.html</a>';
      break;
    case "nahum":
      new_url = '<a href="http://www.revisedcommonversion.com/text/nahum/' + chapter + '.html">http://www.revisedcommonversion.com/text/nahum/' + chapter + '.html</a>';
      break;
    case "habakkuk":
      new_url = '<a href="http://www.revisedcommonversion.com/text/habakkuk/' + chapter + '.html">http://www.revisedcommonversion.com/text/habakkuk/' + chapter + '.html</a>';
      break;
    case "zephaniah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/zephaniah/' + chapter + '.html">http://www.revisedcommonversion.com/text/zephaniah/' + chapter + '.html</a>';
      break;
    case "haggai":
      new_url = '<a href="http://www.revisedcommonversion.com/text/haggai/' + chapter + '.html">http://www.revisedcommonversion.com/text/haggai/' + chapter + '.html</a>';
      break;
    case "zechariah":
      new_url = '<a href="http://www.revisedcommonversion.com/text/zechariah/' + chapter + '.html">http://www.revisedcommonversion.com/text/zechariah/' + chapter + '.html</a>';
      break;
    case "malachi":
      new_url = '<a href="http://www.revisedcommonversion.com/text/malachi/' + chapter + '.html">http://www.revisedcommonversion.com/text/malachi/' + chapter + '.html</a>';
      break;
    case "matthew":
      new_url = '<a href="http://www.revisedcommonversion.com/text/matthew/' + chapter + '.html">http://www.revisedcommonversion.com/text/matthew/' + chapter + '.html</a>';
      break;
    case "mark":
      new_url = '<a href="http://www.revisedcommonversion.com/text/mark/' + chapter + '.html">http://www.revisedcommonversion.com/text/mark/' + chapter + '.html</a>';
      break;
    case "luke":
      new_url = '<a href="http://www.revisedcommonversion.com/text/luke/' + chapter + '.html">http://www.revisedcommonversion.com/text/luke/' + chapter + '.html</a>';
      break;
    case "john":
      new_url = '<a href="http://www.revisedcommonversion.com/text/john/' + chapter + '.html">http://www.revisedcommonversion.com/text/john/' + chapter + '.html</a>';
      break;
    case "acts":
      new_url = '<a href="http://www.revisedcommonversion.com/text/acts/' + chapter + '.html">http://www.revisedcommonversion.com/text/acts/' + chapter + '.html</a>';
      break;
    case "romans":
      new_url = '<a href="http://www.revisedcommonversion.com/text/romans/' + chapter + '.html">http://www.revisedcommonversion.com/text/romans/' + chapter + '.html</a>';
      break;
    case "1corinthians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1corinthians/' + chapter + '.html">http://www.revisedcommonversion.com/text/1corinthians/' + chapter + '.html</a>';
      break;
    case "2corinthians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2corinthians/' + chapter + '.html">http://www.revisedcommonversion.com/text/2corinthians/' + chapter + '.html</a>';
      break;
    case "galatians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/galatians/' + chapter + '.html">http://www.revisedcommonversion.com/text/galatians/' + chapter + '.html</a>';
      break;
    case "ephesians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/ephesians/' + chapter + '.html">http://www.revisedcommonversion.com/text/ephesians/' + chapter + '.html</a>';
      break;
    case "philippians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/philippians/' + chapter + '.html">http://www.revisedcommonversion.com/text/philippians/' + chapter + '.html</a>';
      break;
    case "colossians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/colossians/' + chapter + '.html">http://www.revisedcommonversion.com/text/colossians/' + chapter + '.html</a>';
      break;
    case "1thessalonians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1thessalonians/' + chapter + '.html">http://www.revisedcommonversion.com/text/1thessalonians/' + chapter + '.html</a>';
      break;
    case "2thessalonians":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2thessalonians/' + chapter + '.html">http://www.revisedcommonversion.com/text/2thessalonians/' + chapter + '.html</a>';
      break;
    case "1timothy":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1timothy/' + chapter + '.html">http://www.revisedcommonversion.com/text/1timothy/' + chapter + '.html</a>';
      break;
    case "2timothy":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2timothy/' + chapter + '.html">http://www.revisedcommonversion.com/text/2timothy/' + chapter + '.html</a>';
      break;
    case "titus":
      new_url = '<a href="http://www.revisedcommonversion.com/text/titus/' + chapter + '.html">http://www.revisedcommonversion.com/text/titus/' + chapter + '.html</a>';
      break;
    case "philemon":
      new_url = '<a href="http://www.revisedcommonversion.com/text/philemon/' + chapter + '.html">http://www.revisedcommonversion.com/text/philemon/' + chapter + '.html</a>';
      break;
    case "hebrews":
      new_url = '<a href="http://www.revisedcommonversion.com/text/hebrews/' + chapter + '.html">http://www.revisedcommonversion.com/text/hebrews/' + chapter + '.html</a>';
      break;
    case "james":
      new_url = '<a href="http://www.revisedcommonversion.com/text/james/' + chapter + '.html">http://www.revisedcommonversion.com/text/james/' + chapter + '.html</a>';
      break;
    case "1peter":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1peter/' + chapter + '.html">http://www.revisedcommonversion.com/text/1peter/' + chapter + '.html</a>';
      break;
    case "2peter":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2peter/' + chapter + '.html">http://www.revisedcommonversion.com/text/2peter/' + chapter + '.html</a>';
      break;
    case "1john":
      new_url = '<a href="http://www.revisedcommonversion.com/text/1john/' + chapter + '.html">http://www.revisedcommonversion.com/text/1john/' + chapter + '.html</a>';
      break;
    case "2john":
      new_url = '<a href="http://www.revisedcommonversion.com/text/2john/' + chapter + '.html">http://www.revisedcommonversion.com/text/2john/' + chapter + '.html</a>';
      break;
    case "3john":
      new_url = '<a href="http://www.revisedcommonversion.com/text/3john/' + chapter + '.html">http://www.revisedcommonversion.com/text/3john/' + chapter + '.html</a>';
      break;
    case "jude":
      new_url = '<a href="http://www.revisedcommonversion.com/text/jude/' + chapter + '.html">http://www.revisedcommonversion.com/text/jude/' + chapter + '.html</a>';
      break;
    case "revelation":
      new_url = '<a href="http://www.revisedcommonversion.com/text/revelation/' + chapter + '.html">http://www.revisedcommonversion.com/text/revelation/' + chapter + '.html</a>';
      break;
    default:
      new_url = "No page to suggest for " + old_url + ". See below.";
  }

  document.getElementById("new-url").innerHTML = '<span style="line-height: 1.5;">' + split_url[3] + ', ' + chapter_text + '</span><br />' + new_url;
})();
