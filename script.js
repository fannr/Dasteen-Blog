const scrollTop = document.querySelector(".scrollTop");

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

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  let scrollPos = this.scrollY;

  if (this.scrollY > 50) {
    navbar.classList.add("scrollUp");
    navbar.classList.add("shadow-sm");
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
    navbar.classList.remove("scrollUp");
    navbar.classList.remove("shadow-sm");
  }

  // Icon fadeIn scroll Top

  // Active class Nav-link
  const section = document.querySelectorAll("section");
  section.forEach((s) => {
    if (
      this.scrollY >= s.offsetTop - 100 &&
      this.scrollY < s.offsetTop + s.offsetHeight - 100
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
  if (this.scrollY >= category.offsetTop - 150) {
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
  if (this.scrollY >= titleContent1.offsetTop - 250) {
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
  if (this.scrollY >= titleContent2.offsetTop - 250) {
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
  if (this.scrollY >= titleContent3.offsetTop - 200) {
    const elArticle3 = document.querySelectorAll("#animateArticle3");
    elArticle3.forEach((c, i) => {
      setTimeout(() => {
        elArticle3[i].classList.add("fadeIn");
      }, 300 * i);
    });
  }
  // Animate Article Title ~ 3

  // Animate Contact
  if (this.scrollY >= titleContent3.offsetTop - 250) {
    const elContact = document.querySelectorAll("#animateContact");
    elContact.forEach((el, i) => {
      setTimeout(() => {
        elContact[i].classList.add("fadeIn");
      }, 300 * i);
    });
  }
  // Animate Contact
});

// Nav-link when click hide menu
const navA = document.querySelectorAll(".link");
navA.forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});

scrollTop.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});
