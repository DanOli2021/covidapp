function ChangePage( page ) {
    window.location.href = page;
}


function generateButton(href, iconSrc, buttonText, buttonClass) {
    let button = document.createElement("a");
    button.href = href;
    button.className = buttonClass;
  
    let iconSpan = document.createElement("span");
    iconSpan.className = "material-symbols-outlined";
    iconSpan.style.float = "left";
  
    let iconImg = document.createElement("img");
    iconImg.src = "images/icons/" + iconSrc;
    iconImg.style.width = "96px";
  
    let text = document.createElement("h3");
    text.innerText = buttonText;
  
    iconSpan.appendChild(iconImg);
    button.appendChild(iconSpan);
    button.appendChild(text);
  
    document.body.appendChild(button);
  }
  