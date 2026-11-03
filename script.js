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


/* =====================================
   DANDORA SKILLS CONNECT SYSTEM
===================================== */

function findTraining() {

    const name = document.getElementById("studentName").value.trim();
    const phone = document.getElementById("studentPhone").value.trim();
    const skill = document.getElementById("skillChoice").value;
    const reason = document.getElementById("studentReason").value.trim();
    const result = document.getElementById("trainingResult");

    if (!name || !phone || !skill) {
        result.innerHTML = "<p style='color:red;'>Please fill in your name, phone number and preferred skill.</p>";
        return;
    }

    const institutions = {

        web: {
            school: "Moringa School",
            course: "Web Design",
            link: "https://moringaschool.com/"
        },

        graphic: {
            school: "Dandora Green Light VTC",
            course: "Graphic Design",
            link: "https://www.google.com/search?q=Dandora+Green+Light+VTC+Graphic+Design"
        },

        software: {
            school: "Moringa School",
            course: "Software Engineering",
            link: "https://moringaschool.com/"
        },

        plumbing: {
            school: "Bahati Vocational Training Centre",
            course: "Plumbing",
            link: "https://www.google.com/search?q=Bahati+Vocational+Training+Centre+Plumbing"
        },

        electrical: {
            school: "Bahati Vocational Training Centre",
            course: "Electrical Installation",
            link: "https://www.google.com/search?q=Bahati+Vocational+Training+Centre+Electrical"
        },

        fashion: {
            school: "Bahati Vocational Training Centre",
            course: "Fashion Design",
            link: "https://www.google.com/search?q=Bahati+Vocational+Training+Centre+Fashion+Design"
        },

        digital: {
            school: "Moringa School",
            course: "Digital Skills",
            link: "https://moringaschool.com/"
        }

    };

    const selected = institutions[skill];

    result.innerHTML = `
        <div class="training-match">

            <h3>Application Received!</h3>

            <p>Hello ${escapeHTML(name)}!</p>

            <p>
                You requested training in:
                <strong>${selected.course}</strong>
            </p>

            <h3>Your Training Match</h3>

            <p>
                Recommended Institution:
                <strong>${selected.school}</strong>
            </p>

            <p>
                Your next step is to visit the institution
                and explore its available courses.
            </p>

            <a href="${selected.link}"
               target="_blank"
               rel="noopener noreferrer">
               VISIT ${selected.school.toUpperCase()} →
            </a>

        </div>
    `;
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}
