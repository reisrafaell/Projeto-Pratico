import login from "./scripts/login.js";
import inputLogin from "./scripts/inputLogin.js";
import hours from "./scripts/hours.js";
import time from "./scripts/time.js";
import buttonLogout from "./scripts/buttonLogout.js";

login();

inputLogin();

time();
buttonLogout();

setInterval(() => {
  hours();
}, 1000);
