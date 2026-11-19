
document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelector(".falling-stars");
    const crosses = document.querySelector(".falling-crosses");

    if (!stars || !crosses) {
        console.error("x_x");
        return;
    }

    const starPositions = [
        11, 85, 15, 53, 27, 27, 81, 80, 94, 57,
        46, 44, 95, 9, 83, 26, 36, 58, 71, 63
    ];

    const crossPositions = [
        95, 19, 92, 80, 56, 75, 33, 36, 9, 12,
        11, 16, 24, 29, 80, 45, 51, 7, 63, 48,
        80, 53, 35, 92, 43, 76, 92, 6, 56, 37
    ];

    starPositions.forEach(position => {
        const star = document.createElement("span");
        star.style.left = position + "%";
        star.style.animationDuration = (5 + Math.random() * 8) + "s";
        star.style.animationDelay = (-Math.random() * 10) + "s";
        stars.appendChild(star);
    });

    crossPositions.forEach(position => {
        const cross = document.createElement("span");
        cross.textContent = "†";
        cross.style.left = position + "%";
        cross.style.animationDuration = (5 + Math.random() * 8) + "s";
        cross.style.animationDelay = (-Math.random() * 10) + "s";
        crosses.appendChild(cross);
    });
});
