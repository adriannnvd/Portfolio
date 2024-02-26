//CHANGE COLOR TO LOGO
const letters = document.querySelectorAll('.logo .letter');

function toggleColorChange() {
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.toggle('color-change');
        }, index * 100);
    });
}

setInterval(toggleColorChange, 2000);

//CHANGE COLORS IN NAV-BUTTON
document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll('.nav-button');
  
    navButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        
        navButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
  
        
        this.classList.add('active');
      });
    });
  });
  

//TYPING ANIMATION TO SOTWARE DEVELOPER
document.addEventListener('DOMContentLoaded', function () {
            var elements = document.querySelectorAll('.typing');
            elements.forEach(function (element) {
                var text = element.textContent;
                var intervalId;

                function startTyping() {
                    element.textContent = '';
                    var index = 0;
                    intervalId = setInterval(function () {
                        if (index < text.length) {
                            var letterSpan = document.createElement('span');
                            letterSpan.textContent = text[index];
                            element.appendChild(letterSpan);
                            index++;
                        } else {
                            clearInterval(intervalId);
                            setTimeout(startTyping, 1000); 
                        }
                    }, 100); 
                }

                startTyping();
            });
        });

