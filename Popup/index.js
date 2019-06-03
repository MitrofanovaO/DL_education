let popupContainer = document.getElementsByClassName("popup-container")[0],
    triggerBtn = document.getElementsByClassName("btn")[0],
    okBtn = document.getElementsByClassName("btn__ok")[0];

function showPopup() {
  popupContainer.style.visibility = "visible";
}

function hidePopup() {
  popupContainer.style.visibility = "hidden";
}

triggerBtn.onclick = function(){
  showPopup();
};

popupContainer.onclick = function(e) {
    if (e.target == popupContainer) {
        hidePopup();
      }
  
};

okBtn.onclick = function() {
 hidePopup();
};