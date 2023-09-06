document.addEventListener("DOMContentLoaded", function () {
  const heightInput = document.getElementById("height");
  const widthInput = document.getElementById("width");
  const resizeButton = document.getElementById("resize-button");

  resizeButton.addEventListener("click", function () {
    const height = parseInt(heightInput.value);
    const width = parseInt(widthInput.value);

    if (isNaN(height) || isNaN(width)) {
      alert("Please enter valid height and width values.");
      return;
    }

    chrome.windows.getCurrent(function (window) {
      const updateInfo = {
        width: width,
        height: height,
      };
      chrome.windows.update(window.id, updateInfo);
    });
  });
});
