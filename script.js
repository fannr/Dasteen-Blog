const section = document.querySelectorAll("section");
const navbar = document.querySelector(".navbar");
const category = document.querySelector(".category");
const contact = document.querySelector(".contact");
const titleContent1 = document.querySelector(".titleContent1");
const titleContent2 = document.querySelector(".titleContent2");
const titleContent3 = document.querySelector(".titleContent3");
const card = document.querySelectorAll(".card");
const cardArticle = document.querySelectorAll(".cardArticle");
const cardArticle2 = document.querySelectorAll(".cardArticle2");
const cardArticle3 = document.querySelectorAll(".cardArticle3");
const scrollTop = document.querySelector(".scrollTop");
const navA = document.querySelectorAll(".navbar-nav a.nav-link");
const buttonNavbar = document.querySelector(".navbar-toggler");
const h5Firts = document.querySelector(".browse");
const h5Two = document.querySelector(".seeAll");
const h5FirtsA = document.querySelector(".browseA");
const h5TwoA = document.querySelector(".seeAllA");
const h5FirtsB = document.querySelector(".browseB");
const h5TwoB = document.querySelector(".seeAllB");
const h5FirtsC = document.querySelector(".browseC");
const h5TwoC = document.querySelector(".seeAllC");
const buttonArticle = document.querySelector(".article button");
const elContact = document.querySelectorAll(".animateContact");

navA.forEach((a) => {
  a.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});

window.addEventListener("scroll", function () {
  let scrollPos = this.scrollY;

  if (scrollPos > 0) {
    navbar.classList.add("scrollUp");
    navbar.classList.add("shadow-sm");
    scrollTop.classList.add("active");
  } else {
    navbar.classList.remove("scrollUp");
    navbar.classList.remove("shadow-sm");
    scrollTop.classList.remove("active");
  }

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

  if (scrollPos >= category.offsetTop - 100) {
    h5Firts.classList.add("fadeIn");
    h5Two.classList.add("fadeIn");
    card.forEach((c, i) => {
      setTimeout(() => {
        card[i].classList.add("active");
      }, 300 * i);
    });
  }

  if (scrollPos >= titleContent1.offsetTop - 250) {
    h5FirtsA.classList.add("fadeIn");
    h5TwoA.classList.add("fadeIn");
    cardArticle.forEach((c, i) => {
      setTimeout(() => {
        cardArticle[i].classList.add("active");
      }, 300 * i);
    });
  }

  if (scrollPos >= titleContent2.offsetTop - 250) {
    h5FirtsB.classList.add("fadeIn");
    h5TwoB.classList.add("fadeIn");
    cardArticle2.forEach((c, i) => {
      setTimeout(() => {
        cardArticle2[i].classList.add("active");
      }, 300 * i);
    });
  }

  if (scrollPos >= titleContent3.offsetTop - 250) {
    h5FirtsC.classList.add("fadeIn");
    h5TwoC.classList.add("fadeIn");
    buttonArticle.classList.add("active");
    cardArticle3.forEach((c, i) => {
      setTimeout(() => {
        cardArticle3[i].classList.add("active");
      }, 300 * i);
    });
  }

  if (scrollPos >= buttonArticle.offsetTop) {
    buttonArticle.classList.add("active");
  }

  if (scrollPos >= contact.offsetTop - 200) {
    elContact.forEach((el, i) => {
      setTimeout(() => {
        elContact[i].classList.add("fadeIn");
      }, 300 * i);
    });
    buttonArticle.classList.add("active");
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

window.addEventListener("load", function () {
  const navbarBrand = document.querySelector(".navbar-brand");
  navbarBrand.classList.add("fadeIn");

  navA.forEach((a, i) => {
    setTimeout(() => {
      navA[i].classList.add("fadeIn");
    }, 300 * i);
  });
});
