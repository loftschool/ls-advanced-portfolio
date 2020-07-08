(function() {
  const scrollBtn = document.querySelector(".scroll-down__btn");
  const reqBlock = document.querySelector("section.about");

  scrollBtn.addEventListener("click", e => {
    e.preventDefault();

    reqBlock.scrollIntoView({ block: "center", behavior: "smooth" });
  });
})();

(function() {
  const navItems = document.querySelectorAll("[data-target]");

  function scrollIntoView(e) {
    e.preventDefault();

    const item = e.currentTarget;
    const target = item.getAttribute("data-target");
    const targetElem = document.querySelector(`.${target}`);
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.remove("active");

    targetElem.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  }

  navItems.forEach(item => {
    item.addEventListener("click", scrollIntoView);
  });
})();

(function() {
  const hamburgerBtn = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".sidebar__close");
  const sidebar = document.querySelector(".sidebar");

  hamburgerBtn.addEventListener("click", e => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", e => {
    sidebar.classList.remove("active");
  });
})();

(function() {
  const form = document.getElementById("contact-form");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".modal__close");

  const sumbmitBtn = document.querySelector(".gradient-btn");

  sumbmitBtn.addEventListener("click", e => {
    e.preventDefault();

    modal.classList.add("active");
  });

  // form.addEventListener("sumbit", e => {
  //   e.preventDefault();
  //   console.log('adas');

  //   modal.classList.add("active");
  // });

  closeBtn.addEventListener("click", e => {
    e.preventDefault();
    modal.classList.remove("active");
  });
})();

(function() {

  const inputs = document.querySelectorAll('.form-block__input');

  inputs.forEach(input => {
    input.addEventListener('focus', e => {
      input.closest('.form-block').classList.add('focused');
    })

    input.addEventListener("blur", e => {
      input.closest('.form-block').classList.remove('focused');
    })
  });

}());