window.onload = function () {
  let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

  var div = document.createElement("div");
  div.innerHTML =
    '<div class="slideshow-container">\n' +
    "<p>" +
    tg?.initDataUnsafe?.user?.id +
    "</p>" +
    "</div>\n";
  document.body.appendChild(div);
};
