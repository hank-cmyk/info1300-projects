$(document).ready(function() {


  // When the rooms nav item is clicked
  $("#co-opNav").on("click", function () {
      // $(selector).hasClass(classname)
      if ($("#co-opDropdown").hasClass("hidden")){
          $("#co-opDropdown").removeClass("hidden");
          $("#caret").text("\u25B2");

      }

      else {
          $("#co-opDropdown").addClass("hidden");
          $("#caret").text("\u25BC");
      }

  });

  $("#nextButton").on("click", function() {

    if ( $("#first-photo").is(":visible") ) {
      $("#first-photo").addClass("hidden");
      $("#second-photo").removeClass("hidden");
    }

    else if ( $("#second-photo").is(":visible") ) {
      $("#second-photo").addClass("hidden");
      $("#third-photo").removeClass("hidden");
    }
    else {
      $("#third-photo").addClass("hidden");
      $("#first-photo").removeClass("hidden");
    }
  });

  $("#backButton").on("click", function() {

    if ( $("#second-photo").is(":visible") ) {
      $("#second-photo").addClass("hidden");
      $("#first-photo").removeClass("hidden");
    }

    else if ( $("#third-photo").is(":visible") ) {
      $("#third-photo").addClass("hidden");
      $("#second-photo").removeClass("hidden");
    }
    else {
      $("#first-photo").addClass("hidden");
      $("#third-photo").removeClass("hidden");
    }
  });

});
