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

//GOING TO PROJECT SECTION AFTER CLICKING THE SEE HERE BUTTONS IN SERVICES SECTION
function goProjectOne() {
    document.getElementById("projects").scrollIntoView();
    setActiveProject(1);
}

function goProjectTwo() {
    document.getElementById("projects").scrollIntoView();
    setActiveProject(2);
}

function goProjectThree() {
    document.getElementById("projects").scrollIntoView();
    setActiveProject(3);
}

function setActiveProject(projectNumber) {
    // Remove 'btn-active' class from all project buttons
    var projectButtons = document.querySelectorAll('.projects-buttons li');
    projectButtons.forEach(button => {
        button.classList.remove('btn-active');
    });

    // Add 'btn-active' class to the corresponding project button
    var activeButton = document.querySelector('.projects-buttons .projectOne');
    if (projectNumber === 2) {
        activeButton = document.querySelector('.projects-buttons .projectTwo');
    } else if (projectNumber === 3) {
        activeButton = document.querySelector('.projects-buttons .projectThree');
    }
    activeButton.classList.add('btn-active');
}


// //CHANGING THE CURSOR
// const cursor = document.querySelector('.custom-cursor'); 
 
// document.addEventListener('mousemove', (e) => { 
//     cursor.style.left = e.clientX + 'px'; 
//     cursor.style.top = e.clientY + 'px'; 
// }); 
 
// // Add a hover effect to interactive elements 
// const interactiveElements = document.querySelectorAll('.nav-buttons'); 
// interactiveElements.forEach((element) => { 
//     element.addEventListener('mouseenter', () => { 
//         cursor.style.width = '0'; 
//         cursor.style.height = '0'; 
//     }); 
//     element.addEventListener('mouseleave', () => { 
//         cursor.style.width = '20px'; 
//         cursor.style.height = '20px'; 
//     }); 
// }); 