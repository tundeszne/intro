"use strict";

function loadContent(lang) {
  fetch(`content/${lang}.json`)
    .then((response) => response.text())
    .then((data) => {
      const parsedData = JSON.parse(data);
      if (!parsedData.contents) return;
      const container = document.getElementById("main");
      container.innerHTML = "";
      parsedData.contents.forEach((section) => {
        const sectElement = document.createElement("section");
        const h2Element = document.createElement("h2");
        h2Element.innerText = section.title;
        sectElement.innerText = section.description;
        sectElement.prepend(h2Element);
        container.appendChild(sectElement);
      });
      setActiveLanguage(lang);
    })
    .catch((error) => {
      alert("Error - Cannot find content for " + lang);
      console.log(error);
    });
}

function setActiveLanguage(lang) {
  // TODO: implement
}
