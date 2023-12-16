//Loads the header and footer into the proper positions. This definitely works, regardless of what the compiler says.
$(document).ready(function () {
    var rellax = new Rellax('.rellax');
    $("#navbar").load("header.html");
    $("#footer").load("footer.html");
});