"use strict";

/* ========================================
   OPPORTUNITY DANDORA WEBSITE JAVASCRIPT
======================================== */


/* 1. CONFIGURATION */

// Replace this with your actual Power BI embed URL.
const POWER_BI_EMBED_URL =
    "PASTE_YOUR_POWER_BI_EMBED_URL_HERE";

// Replace this with the email address for receiving messages.
const CONTACT_EMAIL = "YOUR_EMAIL@example.com";


/* 2. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "×" : "☰";

    });


    // Close the mobile menu after clicking a navigation link.

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* 3. AUTOMATIC COPYRIGHT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* 4. POWER BI DASHBOARD CONNECTION */

const embedArea = document.getElementById("powerbiEmbedArea");

const isConfiguredPowerBI =
    POWER_BI_EMBED_URL.startsWith("https://") &&
    POWER_BI_EMBED_URL.includes("powerbi.com") &&
    !POWER_BI_EMBED_URL.includes("PASTE_YOUR");


if (embedArea && isConfiguredPowerBI) {

    // Remove the placeholder message.

    embedArea.innerHTML = "";

    embedArea.style.display = "block";


    // Create the Power BI iframe.

    const frame = document.createElement("iframe");

    frame.title = "Opportunity Dandora Power BI Research Dashboard";

    frame.src = POWER_BI_EMBED_URL;

    frame.loading = "lazy";

    frame.allowFullscreen = true;


    // Display the report.

    embedArea.appendChild(frame);

}


/* 5. CONTACT FORM */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Collect the information entered by the visitor.

        const formData = new FormData(contactForm);

        const name = String(
            formData.get("name") || ""
        ).trim();

        const email = String(
            formData.get("email") || ""
        ).trim();

        const subject = String(
            formData.get("subject") || ""
        ).trim();

        const message = String(
            formData.get("message") || ""
        ).trim();


        // Check that a real contact email has been configured.

        if (
            !CONTACT_EMAIL.includes("fayzafaith785@gmail.com") ||
            CONTACT_EMAIL.includes("fayzafaith785@gmail.com")
        ) {

            formMessage.textContent =
                "Please add your contact email in script.js before using this form.";

            return;

        }


        // Prepare the email content.

        const emailBody =
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message;


        const emailLink =
            "mailto:" + CONTACT_EMAIL +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(emailBody);


        formMessage.textContent =
            "Opening your email application. Review your message and send it there.";


        // Open the visitor's email application.

        window.location.href = emailLink;

    });

}