// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn){
  menuBtn.addEventListener('click',()=>{navLinks.classList.toggle('active');});
}

// Animate elements on scroll
const animateElements = document.querySelectorAll('.animate, .animate-card');
window.addEventListener('scroll',()=>{
  const triggerBottom = window.innerHeight/5*4;
  animateElements.forEach(el=>{
    const boxTop = el.getBoundingClientRect().top;
    if(boxTop<triggerBottom){
      el.style.opacity=1;
      el.style.transform="translateY(0)";
    }
  });
});

// Contact form
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    msg.textContent = "Thank you! We'll get back to you soon.";
    msg.style.color = "#c47f4e";
    form.reset();
  });
}
// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from submitting immediately

    // Validate Name
    if (nameInput.value.trim() === "") {
      formMessage.textContent = "⚠️ Please enter your name.";
      formMessage.style.color = "red";
      return;
    }

    // Validate Email with regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
      formMessage.textContent = "⚠️ Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
    }

    // Validate Message
    if (messageInput.value.trim().length < 10) {
      formMessage.textContent = "⚠️ Your message must be at least 10 characters long.";
      formMessage.style.color = "red";
      return;
    }

    // If all is good
    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    formMessage.style.color = "green";

    // Reset form after success
    form.reset();
  });
});
