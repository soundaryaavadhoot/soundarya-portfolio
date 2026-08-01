// ================================================
// ELEMENTS
// ================================================

const header = document.querySelector(".header");

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section[id]");

const revealElements = document.querySelectorAll(".reveal");

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");



// ================================================
// MOBILE MENU
// ================================================

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("open");

    document.body.classList.toggle("menu-open");


    const icon = menuBtn.querySelector("i");


    if (navbar.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



// ================================================
// CLOSE MENU AFTER CLICK
// ================================================

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        document.body.classList.remove("menu-open");


        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



// ================================================
// HEADER SCROLL EFFECT
// ================================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



// ================================================
// SCROLL REVEAL ANIMATION
// ================================================

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



// ================================================
// ACTIVE NAVIGATION LINK
// ================================================

function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

// Slider

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});

// Show first image
showSlide(currentSlide);



// ================================================
// CONTACT FORM
// ================================================

// contactForm.addEventListener("submit", (event) => {

//     event.preventDefault();


//     const name =
//         document
//             .getElementById("name")
//             .value
//             .trim();


//     const email =
//         document
//             .getElementById("email")
//             .value
//             .trim();


//     const subject =
//         document
//             .getElementById("subject")
//             .value
//             .trim();


//     const message =
//         document
//             .getElementById("message")
//             .value
//             .trim();


//     if (
//         !name ||
//         !email ||
//         !subject ||
//         !message
//     ) {

//         formMessage.textContent =
//             "Please fill in all fields.";

//         formMessage.style.color =
//             "#fb7185";

//         return;

//     }


//     formMessage.textContent =
//         "Form is ready. Connect an email service to receive messages.";

//     formMessage.style.color =
//         "#86efac";

// });
 
emailjs.init({
    publicKey: "8G7pH9Ht2yImamlkM"
});

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent = "Sending...";

    emailjs
        .sendForm(
            "service_x4ncn0d",
            "template_b0k7vhk",
            this
        )
        .then(() => {

            formMessage.textContent =
                "Message sent successfully!";

            formMessage.style.color = "#86efac";

            contactForm.reset();

        })
        .catch((error) => {

            console.error(error);

            formMessage.textContent =
                "Something went wrong. Please try again.";

            formMessage.style.color = "#fb7185";

        });

});


// ================================================
// CURRENT YEAR
// ================================================

document.getElementById("year").textContent =
    new Date().getFullYear();



// ================================================
// SUBTLE MOUSE PARALLAX
// Desktop only
// ================================================

const heroVisual =
    document.querySelector(".hero-visual");


if (
    window.matchMedia("(min-width: 851px)").matches
) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (window.innerWidth / 2 -
                    event.clientX) / 70;


            const y =
                (window.innerHeight / 2 -
                    event.clientY) / 70;


            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}