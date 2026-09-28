/* ==================================
   TOMBOL TIDAK MENGHINDAR
   ================================== */

const noButton = document.getElementById("noButton");

if (noButton) {

    noButton.addEventListener("mouseenter", moveButton);

    noButton.addEventListener("touchstart", function(event) {
        event.preventDefault();
        moveButton();
    });

    function moveButton() {

        const maxX = window.innerWidth - noButton.offsetWidth - 30;
        const maxY = window.innerHeight - noButton.offsetHeight - 30;

        const randomX = Math.max(20, Math.random() * maxX);
        const randomY = Math.max(20, Math.random() * maxY);

        noButton.style.position = "fixed";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    }
}


/* ==================================
   TEXTAREA
   ================================== */

const heartMessage = document.getElementById("heartMessage");
const nextButton = document.getElementById("nextButton");

if (heartMessage && nextButton) {

    heartMessage.addEventListener("input", function() {

        if (heartMessage.value.trim().length > 0) {
            nextButton.classList.remove("hidden");
        } else {
            nextButton.classList.add("hidden");
        }

    });
}


/* ==================================
   NEXT
   ================================== */

function goToPage3() {
    window.location.href = "halaman3.html";
}
