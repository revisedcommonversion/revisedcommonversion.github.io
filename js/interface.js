/*
  The Holy Bible: Revised Common Version
  Copyright (c) 2023 William Masopust
  http://www.revisedcommonversion.com
  The source code of the RCV text is available at http://source.rcv.xyz.

  This project and the accompanying materials are made available under the
  terms of the Eclipse Public License 2.0 which is available at
  https://www.eclipse.org/legal/epl-2.0/.

*/

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
