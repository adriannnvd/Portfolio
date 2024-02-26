const letters = document.querySelectorAll('.logo .letter');

function toggleColorChange() {
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.toggle('color-change');
        }, index * 100); // Adjust the delay as needed
    });
}

setInterval(toggleColorChange, 2000);


document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll('.nav-button');
  
    navButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        navButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
  
        // Add 'active' class to the clicked button
        this.classList.add('active');
      });
    });
  });
  