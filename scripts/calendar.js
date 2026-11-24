const monthYear = document.getElementById("month-year");
const calendarDates = document.getElementById("calendar-dates");
const prevMonth = document.getElementById("prev-month");
const nextMonth = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    // Month and year
    monthYear.textContent = `${monthNames[month]} ${year}`;

    // Clear previous dates
    calendarDates.innerHTML = "";

    // Empty spaces before the first day
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("span");
        calendarDates.appendChild(emptyDay);
    }

    // Calendar dates
    for (let day = 1; day <= lastDate; day++) {
        const date = document.createElement("span");

        date.textContent = day;

        // Highlight today
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            date.classList.add("today");
        }
        calendarDates.appendChild(date);
    }
}

// Previous month
prevMonth.addEventListener("click", () => {
    currentDate.setDate(1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

// Next month
nextMonth.addEventListener("click", () => {
    currentDate.setDate(1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();

