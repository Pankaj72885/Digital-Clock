
document.addEventListener("DOMContentLoaded", () => {
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("today");

  function formatTimeUnit(unit) {
    return unit.toString().padStart(2, "0");
  }

  function updateTime() {
    const now = new Date();
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());

    clockElement.innerText = `${hours} : ${minutes} : ${seconds}`;
  }

  function updateDate() {
    const now = new Date();
    const day = formatTimeUnit(now.getDate());
    const month = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();
    const weekday = now.toLocaleString("default", { weekday: "long" });

    dateElement.innerText = `${day} ${month} ${year} - ${weekday}`;
  }

  // Initialize date and time
  updateDate();
  updateTime();

  // Update clock every second
  setInterval(updateTime, 1000);
});
