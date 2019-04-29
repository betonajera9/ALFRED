function texto() {
  var d = document.createDocumentFragment();
  d.appendChild(document.getElementById("PotherParrafo")[0]);
  d.childNodes[0].nodeValue[0] = document.detElementById("sobreti").value;
}
