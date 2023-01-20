var html = ace.edit("html");
var css = ace.edit("css");
var js = ace.edit("js");
var title = document.getElementById("title");
var result = document.getElementById("result");
html.setTheme("ace/theme/light");
html.session.setMode("ace/mode/html");
html.session.setUseWorker(false);
html.session.setUseWrapMode(true);
css.setTheme("ace/theme/light");
css.session.setMode("ace/mode/css");
css.session.setUseWorker(false);
css.session.setUseWrapMode(true);
js.setTheme("ace/theme/light");
js.session.setMode("ace/mode/javascript");
js.session.setUseWorker(false);
js.session.setUseWrapMode(true);
function showRes() {
  result.src = "data:text/html;charset=utf-8," + encodeURIComponent("<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><style>" + css.getValue() + "</style></head><body>" + html.getValue() + "<script>" + js.getValue() + "<" + "/script></body></html>");
}
html.session.on("change", showRes);
css.session.on("change", showRes);
js.session.on("change", showRes);
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
  download("program.html", "<!DOCTYPE html>\n<html>\n<head>\n<title>" + title.value + "</title>\n<meta charset='utf-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1'>\n<style>\n" + css.getValue() + "\n</style>\n</head>\n<body>\n" + html.getValue() + "\n<script>\n" + js.getValue() + "\n<" + "/script>\n</body>\n</html>");
};
document.getElementById("reload").onclick = function() {showRes();};
