// script.js

document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('nav button');
  const sections = document.querySelectorAll('main section');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');

      sections.forEach(section => {
        if (section.id === target) {
          section.classList.add('fade-in');
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });

  // Default section to show
  if (sections.length > 0) {
    sections.forEach((s, i) => {
      s.style.display = i === 0 ? 'block' : 'none';
    });
  }

  // Simulated principal login
  const principalLoginForm = document.getElementById('principal-login-form');
  if (principalLoginForm) {
    principalLoginForm.addEventListener('submit', e => {
      e.preventDefault();
      const username = document.getElementById('principal-username').value;
      const password = document.getElementById('principal-password').value;

      if (username === 'principal' && password === 'admin123') {
        alert('Welcome, Principal!');
        document.getElementById('principal-area').style.display = 'block';
      } else {
        alert('Invalid login. Please try again.');
      }
    });
  }
});
