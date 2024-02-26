const letters = document.querySelectorAll('.logo .letter');

function toggleColorChange() {
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.toggle('color-change');
        }, index * 100); // Adjust the delay as needed
    });
}

setInterval(toggleColorChange, 2000);