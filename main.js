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


//CHANGING THE ACTIVE BUTTON FOR NAV-BAR
var btnContainer = document.getElementById("nav-buttons");

var btns = btnContainer.getElementsByClassName("nav-button");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}


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

//CHANGING THE CONTENTS IN PROJECTS
    function showProjectOne() {
        document.querySelector(".projects-image").setAttribute('src',"images/app-development.png");
        document.querySelector('.project-title').textContent = "SPENDEEFY";
        document.querySelector(".project-description").textContent = "A mobile application that helps the user to identify and eliminate wasteful spending habits in their financial life.";

        document.querySelector(".content-icon1").setAttribute('src',"images/java-logo.png");
        document.querySelector(".content-icon2").setAttribute('src',"images/android-studio-logo.png");
        document.querySelector(".content-icon3").setAttribute('src',"images/firebase-logo.png");
    }
    function showProjectTwo() {
        document.querySelector(".projects-image").setAttribute('src',"images/website_img.png");
        document.querySelector('.project-title').textContent = "TITLE";
        document.querySelector(".project-description").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

        document.querySelector(".content-icon1").setAttribute('src',"");
        document.querySelector(".content-icon2").setAttribute('src',"");
        document.querySelector(".content-icon3").setAttribute('src',"");
    }

    function showProjectThree() {
        document.querySelector(".projects-image").setAttribute('src',"images/ui-ux-img.png");
        document.querySelector('.project-title').textContent = "TITLE";
        document.querySelector(".project-description").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

        document.querySelector(".content-icon1").setAttribute('src',"");
        document.querySelector(".content-icon2").setAttribute('src',"");
        document.querySelector(".content-icon3").setAttribute('src',"");
    }
        
 //CHANGING THE ACTIVE BUTTON FOR PROJECTS BUTTONS
var btnContainer = document.getElementById("projects-buttons");

var btns = btnContainer.getElementsByClassName("projects-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("btn-active");
    current[0].className = current[0].className.replace(" btn-active", "");

    this.className += " btn-active";
  });
}       