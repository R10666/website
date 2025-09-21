// Footer year updater
const yearSpan = document.getElementById("year");
if (yearSpan) {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear > startYear 
        ? `${startYear}–${currentYear}` 
        : `${startYear}`;
}
