/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */
window.addEventListener('DOMContentLoaded', _event => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://npm.elemecdn.com/lxgw-wenkai-screen-webfont/style.css";
  document.head.append(link);
})
