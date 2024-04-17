function copyText() {
  var text = document.getElementById("textToCopy");
  var range = document.createRange();
  range.selectNode(text);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Text copied: " + text.textContent);
}
