var html = ace.edit("html");
var css = ace.edit("css");
var js = ace.edit("js");
var result = document.getElementById("result").contentWindow.document;
html.setTheme("ace/theme/light");
html.session.setMode("ace/mode/html");
html.session.setUseWorker(false);
css.setTheme("ace/theme/light");
css.session.setMode("ace/mode/css");
css.session.setUseWorker(false);
js.setTheme("ace/theme/light");
js.session.setMode("ace/mode/javascript");
js.session.setUseWorker(false);
var code = "<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><style>" + css.getValue() + "</style></head><body>" + html.getValue() + "<script>" + js.getValue() + "</script></body></html>";
function showRes() {
  result.open();
  result.writeln("<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><style>" + css.getValue() + "</style></head><body>" + html.getValue() + "<script>" + js.getValue() + "</script></body></html>");
  result.close();
}
document.body.onkeyup = showRes;
showRes();
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
document.getElementById("save").onclick = function() {
  download("program.html", code);
};
document.getElementById("reload").onclick = function() {showRes();};