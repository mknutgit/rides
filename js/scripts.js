$(document).ready(function() {
  var height = confirm("Are you over 3 feet tall?  Select ok for yes and cancel for no");

   if (height) {
     $('#tall').addClass("tall");
   }
   else {
     $('#short').addClass("short");
   }
 });
