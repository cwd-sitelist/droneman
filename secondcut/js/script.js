
document.addEventListener("DOMContentLoaded", () => {

  /* ================= HEADER SCROLL ================= */
  const header = document.getElementById("header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  gsap.registerPlugin(ScrollTrigger);
 
let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"+=100%",
    scrub:true,
    pin:".hero-pin"
  }
});
 
/* 🔥 STEP 1: BG + BUILDING START */
tl.to(".bg",{
  scale:1.2,
  yPercent:-15
},0);
 
tl.to(".building",{
  yPercent:-60,
  scale:1.1
},0);
 
/* 🔥 STEP 2: TOP TEXT HIDE */
tl.to(".content1",{
  opacity:0,
  y:-40
},0.15);
 
/* 🔥 STEP 3: CLIP TEXT APPEAR */
tl.to(".clip-text",{
  opacity:1
},0.35);
 
/* 🔥 STEP 4: IMAGE MOVE INSIDE TEXT */
tl.to(".clip-text",{
  backgroundPosition:"50% 100%",
  ease:"none"
},0.35);
 
/* 🔥 STEP 5: BUILDING FADE */
tl.to(".building",{
  opacity:0
},0.55);
 
/* 🔥 STEP 6: TEXT EXIT */
tl.to(".text-wrap",{
  y:-150,
  opacity:0
},0.75);
 
/* ===================================== */
/* 🔥 FINAL STEP: CLOUDS MOVE + SECTION REVEAL */
/* ===================================== */
 
tl.to(".cloud1",{
  y:-600,
  x:-100,
  opacity:0.9,
  ease:"power1.out"
},0.75);
 
tl.to(".cloud2",{
  y:-600,
  x:120,
  opacity:0.9,
  ease:"power1.out"
},0.75);
 
/* CLOUD PARALLAX */
gsap.to(".hero_cloud.left",{
  x:120,
  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"bottom top",
    scrub:1
  }
});
 
gsap.to(".hero_cloud.right",{
  x:-120,
  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"bottom top",
    scrub:1
  }
});

  /* ================= TEXT REVEAL ================= */
  gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector(".reveal-text");

if (text && typeof gsap !== "undefined") {
  const words = text.innerText.split(" ");
  text.innerHTML = "";

  words.forEach(word => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.style.opacity = 0; // initial state
    text.appendChild(span);
  });

  const spans = document.querySelectorAll(".reveal-text span");
gsap.fromTo(spans,
  { opacity: 0.3 },
  { 
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".reveal-section",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1.1
    }
  }
);
}

  /* ================= VIDEO MASK ================= */
const videoSection = document.querySelector(".video-section");
const mask = document.querySelector(".video-mask");

let locked = false; // 🔥 important

if (videoSection && mask) {

  window.addEventListener("scroll", () => {

    if (locked) return; // stop everything once done

    const rect = videoSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = 1 - rect.top / windowHeight;
    progress = Math.max(0, Math.min(1, progress));

    mask.style.transform = `translateX(-${progress * 100}%)`;

    // 🔥 LOCK when finished
    if (progress >= 1) {
      locked = true;
      mask.style.transform = `translateX(-100%)`; // fix final state
    }

  });

}
  /* ================= CHEVRON ANIMATION ================= */
  const wrapper = document.querySelector(".chevron-wrapper");
  const section = document.querySelector(".chevron-section");

  if (wrapper && section) {
    let current = 100;
    let target = 100;
    let locked = false;

    window.addEventListener("scroll", () => {
      if (locked) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = (windowHeight - rect.top) / windowHeight;
      progress = Math.max(0, Math.min(1, progress));

      target = 100 - (progress * 100);

      if (progress >= 1) {
        target = 0;
        locked = true;
      }
    });

    function animateChevron() {
      current += (target - current) * 0.08;
      if (current < 0) current = 0;

      wrapper.style.transform = `translateX(${current}%)`;
      requestAnimationFrame(animateChevron);
    }

    animateChevron();
  }

  /* ================= INTERSECTION ANIMATION ================= */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-left, .reveal-up')
    .forEach(el => observer.observe(el));

  /* ================= TESTIMONIAL SLIDER ================= */
  if (window.jQuery && $('.testimonial-slider').length) {
    const slider = $('.testimonial-slider');
    slider.owlCarousel({
      items: 1,
      loop: true,
      autoplay:false,
      margin: 0,
      nav: false,
      dots: false,
      smartSpeed: 700,
      animateOut: 'fadeOut'
    });

    $('.custom-dots span').click(function () {
      let index = $(this).data('index');
      slider.trigger('to.owl.carousel', [index, 500]);

      $('.custom-dots span').removeClass('active');
      $(this).addClass('active');
    });

    slider.on('changed.owl.carousel', function (event) {
      let index = event.item.index - event.relatedTarget._clones.length / 2;
      let total = event.item.count;

      if (index >= total) index -= total;
      if (index < 0) index += total;

      $('.custom-dots span').removeClass('active');
      $('.custom-dots span').eq(index).addClass('active');
    });
  }

  /* ================= DRONE CURSOR FOLLOW ================= */
  const drone = document.getElementById("drone");

  if (drone) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let posX = mouseX;
    let posY = mouseY;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateDrone() {
      posX += (mouseX - posX) * 0.08;
      posY += (mouseY - posY) * 0.08;

      let dx = mouseX - posX;
      let angle = dx * 0.05;

      drone.style.transform = `
        translate(${posX}px, ${posY}px)
        rotate(${angle}deg)
      `;

      requestAnimationFrame(animateDrone);
    }

    animateDrone();
  }

});
