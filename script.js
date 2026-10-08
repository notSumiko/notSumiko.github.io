// ═══════════════════════════════════════
// FILTER TOGGLES
// ═══════════════════════════════════════

const grainButton = document.getElementById("grain-toggle");
const crtButton = document.getElementById("crt-toggle");

// GRAIN
grainButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("grain-off");

    if (document.documentElement.classList.contains("grain-off")) {
        grainButton.textContent = "GRAIN: OFF";
    } else {
        grainButton.textContent = "GRAIN: ON";
    }
});


// CRT
crtButton.addEventListener("click", () => {
    document.body.classList.toggle("crt-off");

    if (document.body.classList.contains("crt-off")) {
        crtButton.textContent = "CRT: OFF";
    } else {
        crtButton.textContent = "CRT: ON";
    }
});