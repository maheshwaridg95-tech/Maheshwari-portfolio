/* ===========================
   TYPING EFFECT
=========================== */

const typingText = document.getElementById("typing-text");

const roles = [
    "AWS Cloud Engineer",
    "DevOps Engineer",
    "Cloud Automation Engineer",
    "Linux Administrator",
    "Terraform Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();

/* ===========================
   COUNTER ANIMATION
=========================== */

const counters =
    document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                setTimeout(
                    updateCounter,
                    20
                );

            } else {

                counter.innerText =
                    target + "+";
            }
        };

        updateCounter();

    });
};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
        document.querySelector("#stats");

    const position =
        statsSection.getBoundingClientRect().top;

    const screenHeight =
        window.innerHeight;

    if (
        position < screenHeight - 100 &&
        !counterStarted
    ) {

        startCounter();

        counterStarted = true;
    }
});

/* ===========================
   FADE IN SECTIONS
=========================== */

const sections =
    document.querySelectorAll(".section");

const revealSections = () => {

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (
            sectionTop <
            screenHeight - 120
        ) {

            section.classList.add("show");
        }

    });
};

sections.forEach(section => {

    section.classList.add("fade-in");

});

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "mobile-active"
        );

    }
);

/* ===========================
   PROJECT CARD HOVER MESSAGE
=========================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            alert(
                "Project details can be linked to your GitHub repository."
            );

        }
    );

});

/* ===========================
   ACTIVE NAV LINK
=========================== */

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        document
            .querySelectorAll("section")
            .forEach(section => {

                const sectionTop =
                    section.offsetTop;

                const sectionHeight =
                    section.clientHeight;

                if (
                    pageYOffset >=
                    sectionTop - 200
                ) {

                    current =
                        section.getAttribute("id");
                }

            });

        navItems.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link
                    .getAttribute("href")
                    .includes(current)
            ) {

                link.classList.add(
                    "active"
                );
            }
        });

    }
);

/* ===========================
   HERO FADE LOAD
=========================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
function toggleTrainingDetails(){

    const details =
        document.getElementById(
            "training-details"
        );

    if(details.style.display === "block"){

        details.style.display = "none";

    }else{

        details.style.display = "block";

    }

}
function toggleTrainingDetails(){

    const details =
        document.getElementById(
            "training-details"
        );

    if(details.style.display === "block"){

        details.style.display = "none";

    }else{

        details.style.display = "block";

    }

}