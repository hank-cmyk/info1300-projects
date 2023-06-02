$(document).ready(function () {

  $("#feedbackForm").on("submit", function() {
    var formValid = true;

    if( $("#name").prop("validity").valid ) {
      $("#nameError").addClass("hidden");
    } else {
      $("#nameError").removeClass("hidden");
      formValid = false;
    }

    if( $("#email").prop("validity").valid ) {
      $("#emailError").addClass("hidden");
    } else {
      $("#emailError").removeClass("hidden");
      formValid = false;
    }

    if ( $("#Yes").is(':checked') || $("#No").is(':checked') ) {
      $("#attendError").addClass("hidden");
    } else {
      $("#attendError").removeClass("hidden");
      formValid = false;
    }

    return formValid;
  });

});
