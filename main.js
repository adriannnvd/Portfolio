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
// document.addEventListener("DOMContentLoaded", function() {
//     const navButtons = document.querySelectorAll('.nav-button');
  
//     navButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
        
//         navButtons.forEach(function(btn) {
//           btn.classList.remove('active');
//         });
  
        
//         this.classList.add('active');
//       });
//     });
//   });
  
document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('section'); // assuming each section has an id matching the href of the corresponding nav button
    
    // Function to check which section is in view
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to update active class based on scroll position
    function updateActiveButton() {
        sections.forEach(function(section, index) {
            if (isInViewport(section)) {
                navButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                navButtons[index].classList.add('active');
            }
        });
    }
    
    // Add event listeners for click on nav buttons
    navButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            navButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            sections[index].scrollIntoView({ behavior: "smooth" }); // Scroll to the corresponding section
        });
    });
    
    // Add event listener for scroll to update active button
    window.addEventListener('scroll', updateActiveButton);
    
    // Update active button on page load
    updateActiveButton();
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

