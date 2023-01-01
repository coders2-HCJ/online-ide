var html = ace.edit("html");
var css = ace.edit("css");
var js = ace.edit("js");
var title = document.getElementById("title");
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
function showRes() {
	result.open();
	result.writeln("<!DOCTYPE html><html><head><title>" + title.value + "</title><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><style>" + css.getValue() + "</style></head><body>" + html.getValue() + "<script>" + js.getValue() + "</script></body></html>");
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
	download("program.html", "<!DOCTYPE html><html><head><title>" + title.value + "</title><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><style>" + css.getValue() + "</style></head><body>" + html.getValue() + "<script>" + js.getValue() + "</script></body></html>");
};
document.getElementById("reload").onclick = function() {showRes();};
