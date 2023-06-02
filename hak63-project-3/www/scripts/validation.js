$(document).ready(function () {

  $("#request-form").on("submit", function() {
    var formValid = true;

    // is the name valid
    if( $("#request-name").prop("validity").valid ) {
      $("#feedback-name").addClass("hidden");
    }
    else {
      $("#feedback-name").removeClass("hidden");
      formValid = false;
    }

    // is the email valid
    if( $("#request-email").prop("validity").valid ) {
      $("#feedback-email").addClass("hidden");
    }
    else {
      $("#feedback-email").removeClass("hidden");
      formValid = false;
    }

    // is one year selected ?
    if ( $("#request-freshman").is(':checked') || $("#request-sophomore").is(':checked') || $("#request-junior").is(':checked') || $("#request-senior").is(':checked')) {
      $("#feedback-year").addClass("hidden");
    }
    else {
      $("#feedback-year").removeClass("hidden");
      formValid = false;
    }

    // is at least one day checkbox checked ?
    if ( $("#request-friday").is(':checked') || // only friday is checked
    $("#request-saturday").is(':checked') || // only saturday is checked
    $("#request-sunday").is(':checked') || // only sunday is checked
    ($("#request-friday").is(':checked') && $("#request-saturday").is(':checked')) || // friday AND saturday
    ($("#request-friday").is(':checked') && $("#request-sunday").is(':checked')) || // friday AND sunday
    ($("#request-saturday").is(':checked') && $("#request-sunday").is(':checked')) || // saturday AND sunday
    ($("#request-friday").is(':checked') && $("#request-saturday").is(':checked') && $("#request-sunday").is(':checked')) )  { // all three days
      $("#feedback-day").addClass("hidden");
    }
    else {
      $("#feedback-day").removeClass("hidden");
      formValid = false;
    }

    // is one of the transportation buttons selected ?
    if ( $("#request-bus").is(':checked') || $("#request-car").is(':checked') || $("#request-walking").is(':checked') || $("#request-other").is(':checked')) {
      $("#feedback-transport").addClass("hidden");
    }
    else {
      $("#feedback-transport").removeClass("hidden");
      formValid = false;
    }


    return formValid;
  });

});
