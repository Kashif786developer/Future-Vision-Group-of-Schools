document.getElementById('admissionForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const grade = document.getElementById('grade').value;
  const msg = document.getElementById('formMsg');

  if(name.length < 3){ msg.textContent = 'Enter valid name'; msg.style.color='red'; return; }
  if(!email.includes('@')){ msg.textContent = 'Enter valid email'; msg.style.color='red'; return; }
  if(phone.length < 10){ msg.textContent = 'Enter valid phone'; msg.style.color='red'; return; }
  if(grade === ''){ msg.textContent = 'Select grade'; msg.style.color='red'; return; }

  msg.textContent = 'Application submitted successfully!';
  msg.style.color = 'green';
  this.reset();
});

const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('show'));
},{ threshold:0.2 });
faders.forEach(f => observer.observe(f));

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }
});
