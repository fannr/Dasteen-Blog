// when browser load
window.addEventListener("load", function () {
  // Animate for Navbar
  const elNavbar = document.querySelectorAll("#animateNav");
  elNavbar.forEach((e, i) => {
    setTimeout(() => {
      elNavbar[i].classList.add("fadeIn");
    }, 300 * i);
  });
  // Animate for Navbar

  // Animate for Home
  const elHome = document.querySelectorAll("#animateHome");
  elHome.forEach((e, i) => {
    setTimeout(() => {
      elHome[i].classList.add("fadeIn");
    }, 400 * i);
  });
  // Animate for Home
});

// Nav-link when click hide menu
const navA = document.querySelectorAll(".nav-link");
navA.forEach((a) => {
  a.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});
// Nav-link when click hide menu

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  let scrollPos = this.scrollY;

  if (scrollPos > 0) {
    navbar.classList.add("scrollUp");
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("scrollUp");
    navbar.classList.remove("shadow-sm");
  }

  // Icon fadeIn scroll Top
  const homeSection = document.querySelector(".home");
  const scrollTop = document.querySelector(".scrollTop");
  if (scrollPos < homeSection.offsetTop + homeSection.offsetHeight - 100) {
    scrollTop.classList.remove("active");
  } else {
    scrollTop.classList.add("active");
  }
  // Icon fadeIn scroll Top

  // Active class Nav-link
  const section = document.querySelectorAll("section");
  section.forEach((s) => {
    if (
      scrollPos >= s.offsetTop - 100 &&
      scrollPos < s.offsetTop + s.offsetHeight - 100
    ) {
      let currendId = s.attributes.id.value;
      removeAllActiveClass();
      setCurrentActiveClass(currendId);
    }
  });

  function removeAllActiveClass() {
    navA.forEach((a) => {
      a.classList.remove("active");
    });
  }

  function setCurrentActiveClass(id) {
    let selector = `.navbar-nav a[href="#${id}"]`;

    const elementSelector = document.querySelector(selector);
    elementSelector.classList.add("active");
  }
  // Active class Nav-link

  // Animate Category element
  const category = document.querySelector(".category");
  if (scrollPos >= category.offsetTop - 150) {
    const elCategory = document.querySelectorAll("#animateCategory");
    elCategory.forEach((c, i) => {
      setTimeout(() => {
        elCategory[i].classList.add("fadeIn");
      }, 300 * i);
    });
  }
  // Animate Category element

  // Animate Article Title ~ 1
  const titleContent1 = document.querySelector(".titleContent1");
  if (scrollPos >= titleContent1.offsetTop - 250) {
    const elArticle = document.querySelectorAll("#animateArticle");
    elArticle.forEach((c, i) => {
      setTimeout(() => {
        elArticle[i].classList.add("fadeIn");
      }, 300 * i);
    });
  }
  // Animate Article Title ~ 1

  // Animate Article Title ~ 2
  const titleContent2 = document.querySelector(".titleContent2");
  if (scrollPos >= titleContent2.offsetTop - 250) {
    const elArticle2 = document.querySelectorAll("#animateArticle2");
    elArticle2.forEach((c, i) => {
      setTimeout(() => {
        elArticle2[i].classList.add("fadeIn");
      }, 300 * i);
    });
  }
  // Animate Article Title ~ 2

  // Animate Article Title ~ 3
  const titleContent3 = document.querySelector(".titleContent3");
  if (scrollPos >= titleContent3.offsetTop - 200) {
    const elArticle3 = document.querySelectorAll("#animateArticle3");
    elArticle3.forEach((c, i) => {
      setTimeout(() => {
        elArticle3[i].classList.add("fadeIn");
      }, 300 * i);
    });
  }
  // Animate Article Title ~ 3

  // Animate Contact
  const contact = document.querySelector(".contact");
  if (scrollPos >= contact.offsetTop - 350) {
    const elContact = document.querySelectorAll("#animateContact");
    elContact.forEach((el, i) => {
      setTimeout(() => {
        elContact[i].classList.add("fadeIn");
      }, 300 * i);
    });
  }
  // Animate Contact
});
