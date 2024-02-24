function updateDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString("en-US", { hour12: true });
    document.getElementById("currentDateTime").textContent = dateTimeString;
  }
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);
  