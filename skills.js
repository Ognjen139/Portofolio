document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".progress-ring__circle");

    circles.forEach((circle) => {
        const percent = parseInt(circle.getAttribute("data-percent"));
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius; // Popravljeno: baza vrednost radiusa

        console.log(`Loading skill: ${percent}% (Circumference: ${circumference})`);

        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference; // Početno stanje (prazan krug)

        setTimeout(() => {
            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }, 500); // Mali delay da se animacija vidi
    });
});
