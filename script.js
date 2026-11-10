"use strict";

const yearElement = document.querySelector("#current-year");
const enquiryForm = document.querySelector(".enquiry-form");
const formStatus = document.querySelector(".form-status");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

if (enquiryForm && formStatus) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.hidden = false;
    formStatus.textContent =
      "Thank you. The enquiry form is ready to connect to the approved business email.";
    enquiryForm.reset();
  });
}
