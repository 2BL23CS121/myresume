// script.js

// Set current year in footer
document.addEventListener("DOMContentLoaded", function () {
    var yearSpan = document.getElementById("year");
    if (yearSpan) {
        var currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});
