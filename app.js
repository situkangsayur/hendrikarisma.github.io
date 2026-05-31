// one-click copy for share links
function copyShare(btn) {
  var box = btn.closest('.share-on');
  var inp = box && box.querySelector('.share-url');
  if (!inp) return;
  inp.focus();
  inp.select();
  inp.setSelectionRange(0, 99999);
  var done = function () {
    var old = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(function () { btn.textContent = old; }, 1200);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(inp.value).then(done, function () {
      try { document.execCommand('copy'); done(); } catch (e) {}
    });
  } else {
    try { document.execCommand('copy'); done(); } catch (e) {}
  }
}
