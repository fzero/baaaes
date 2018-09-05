var qr = require("qr-encode");

// Error Correction:

// level: L (Low) 7% of codewords can be restored.
// level: M (Medium) 15% of codewords can be restored.
// level: Q (Quartile) 25% of codewords can be restored.
// level: H (High) 30% of codewords can be restored.

var dataURI = qr("1F3sAm6ZtwLAUnj7d38pGFxtP3RVEvtsbV", {
  type: 6,
  size: 6,
  level: "Q"
});

//If using in browsers:
var img = new Image();
img.src = dataURI;
document.body.appendChild(img);

module.exports = function(address) {
  var dataURI = qr(address, {
    type: 6,
    size: 6,
    level: "Q"
  });
  var img = new Image();
  img.src = dataURI;
  document.body.appendChild(img); //img is the QR code
};
