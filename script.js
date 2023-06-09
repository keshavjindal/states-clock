function updateTime() {
    const delhiTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    const pennsylvaniaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    const arizonaTime = new Date().toLocaleString("en-US", {timeZone: "America/Phoenix"});
    const minnesotaTime = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
  
    // Update the HTML with the current time in each location
    document.getElementById("delhiClock").innerHTML = delhiTime;
    document.getElementById("pennsylvaniaClock").innerHTML = pennsylvaniaTime;
    document.getElementById("arizonaClock").innerHTML = arizonaTime;
    document.getElementById("minnesotaClock").innerHTML = minnesotaTime;
  }
  
  setInterval(updateTime, 1000);
  