"use strict";

const yearElement = document.querySelector("#current-year");
const enquiryForm = document.querySelector(".enquiry-form");
const formStatus = document.querySelector(".form-status");
const whatsappLinks = document.querySelectorAll("[data-whatsapp]");
const instagramLinks = document.querySelectorAll("[data-instagram]");
const interestField = document.querySelector('select[name="interest"]');
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

const site = {
  whatsapp: "250000000000",
  instagram: "https://instagram.com/lamaisondafrique",
  email: "",
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

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (enquiryForm && formStatus) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!enquiryForm.checkValidity()) {
      enquiryForm.reportValidity();
      return;
    }

    formStatus.hidden = false;
    formStatus.classList.remove("error");

    if (!site.email) {
      formStatus.classList.add("error");
      formStatus.textContent =
        "Your details are valid, but form delivery is awaiting the approved business email.";
      return;
    }

    const formData = new FormData(enquiryForm);
    const subject = encodeURIComponent(
      `Textile enquiry: ${formData.get("interest")}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nContact: ${formData.get("contact")}\n\n${formData.get("message")}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    formStatus.textContent = "Opening your email application.";
    enquiryForm.reset();
  });
}
