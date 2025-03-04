document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".progress-ring__circle");

    circles.forEach(circle => {
        const percent = parseInt(circle.getAttribute("data-percent"));
        const radius = circle.getAttribute("r");
        const circumference = 2 * Math.PI * radius; // 2 * PI * r

        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDasharray = circumference; // Postavi pun krug
        circle.style.strokeDashoffset = offset; // Postavi offset da se puni pravilno
    });
});
