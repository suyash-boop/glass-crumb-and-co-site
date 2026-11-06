// Crumb & Co — small progressive enhancements
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Appointment form: client-side validation + confirmation message
  var form = document.getElementById("booking-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.elements["name"];
      var contact = form.elements["contact"];
      var datetime = form.elements["datetime"];

      status.classList.remove("success", "error");

      if (!name.value.trim() || !contact.value.trim() || !datetime.value) {
        status.textContent = "Please fill in your name, contact and preferred date & time.";
        status.classList.add("error");
        var firstEmpty = !name.value.trim() ? name
          : !contact.value.trim() ? contact : datetime;
        firstEmpty.focus();
        return;
      }

      var firstName = name.value.trim().split(" ")[0];
      status.textContent =
        "Thanks, " + firstName + "! Your appointment request has been received — " +
        "we'll confirm your slot shortly. 🍞";
      status.classList.add("success");
      form.reset();
    });
  }
})();
