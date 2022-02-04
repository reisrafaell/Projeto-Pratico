import login from "./scripts/login.js";
import hours from "./scripts/hours.js";
import time from "./scripts/time.js";
import buttonLogout from "./scripts/buttonLogout.js"




login();

time();
buttonLogout ();

setInterval(() => {
  hours();
}, 1000);

