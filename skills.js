document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".progress-ring__circle");

    circles.forEach(circle => {
        const percent = circle.getAttribute("data-percent");
        const circumference = 2 * Math.PI * 50; // 2 * PI * r

        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    });
});
