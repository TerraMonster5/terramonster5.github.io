function redirect() {
  var loc = window.location.pathname
  window.open("/redirect.html?loc=" + loc, "_self")
}