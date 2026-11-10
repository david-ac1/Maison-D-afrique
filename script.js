"use strict";

const yearElement = document.querySelector("#current-year");
const enquiryForm = document.querySelector(".enquiry-form");
const formStatus = document.querySelector(".form-status");
const whatsappLinks = document.querySelectorAll("[data-whatsapp]");
const instagramLinks = document.querySelectorAll("[data-instagram]");
const interestField = document.querySelector('select[name="interest"]');

const site = {
  whatsapp: "250000000000",
  instagram: "https://instagram.com/lamaisondafrique",
  message: "Hello La Maison d’Afrique, I would like to enquire about your textiles.",
};

whatsappLinks.forEach((link) => {
  link.href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

instagramLinks.forEach((link) => {
  link.href = site.instagram;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelectorAll("[data-interest]").forEach((link) => {
  link.addEventListener("click", () => {
    if (interestField) {
      interestField.value = link.dataset.interest;
    }
  });
});

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
