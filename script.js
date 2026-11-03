"use strict";

/* =====================================
   OPPORTUNITY DANDORA WEBSITE
   JAVASCRIPT
===================================== */

// =====================================
// 1. WEBSITE SETTINGS
// =====================================

const CONTACT_EMAIL = "fayzafaith785@gmail.com";


// =====================================
// 2. MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";

        });

    });
}


// =====================================
// 3. AUTOMATIC FOOTER YEAR
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =====================================
// 4. YOUTH SKILLS REQUEST FORM
// =====================================

const skillsRequestForm =
    document.getElementById("skillsRequestForm");

const skillsFormMessage =
    document.getElementById("skillsFormMessage");

if (skillsRequestForm) {

    skillsRequestForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const formData = new FormData(skillsRequestForm);

        const name = formData.get("name");
        const email = formData.get("email");
        const ageGroup = formData.get("ageGroup");
        const skill = formData.get("skill");
        const message = formData.get("message");

        const subject = encodeURIComponent(
            "Youth Skills Training Request - Opportunity Dandora"
        );

        const emailBody = encodeURIComponent(
            "NEW SKILLS TRAINING REQUEST\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Age Group: " + ageGroup + "\n" +
            "Requested Skill: " + skill + "\n" +
            "Additional Information: " + message
        );

        const mailLink =
            "mailto:" + CONTACT_EMAIL +
            "?subject=" + subject +
            "&body=" + emailBody;

        if (skillsFormMessage) {
            skillsFormMessage.textContent =
                "Your email application will open. Please send the prepared request.";
        }

        window.location.href = mailLink;

    });

}


// =====================================
// 5. SMOOTH SCROLLING
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId && targetId.length > 1) {

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


// =====================================
// 6. WEBSITE LOADED
// =====================================

console.log("Opportunity Dandora website loaded successfully!");