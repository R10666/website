// Footer year updater
const yearSpan = document.getElementById("year");
if (yearSpan) {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();

    if (currentYear > startYear) {
        yearSpan.textContent = `${startYear}–${currentYear}`;
    } else {
        yearSpan.textContent = `${startYear}`;
    }
}
