console.log("Hello World!!");

const year = document.querySelector(".year");
const currentyear = new Date().getFullYear();
year.textContent = currentyear;

///////////////////////////////////////////////////////////
// Mobile Navigation Work

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerEL.classList.toggle("open-nav");
});

///////////////////////////////////////////////////////////
// Fixing Smooth Scrolling
const allLinks = document.querySelectorAll("a");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "/")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("open-nav");
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation
const SectionHeroEL = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);
observer.observe(SectionHeroEL);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
