define([
	'jquery',
	'template',
	'proxy',
	'layer',
	'snippet',
	'css!mindList/userMui.css',
	'css!modul/snippet/jquery.snippet.css'
], function($, template, proxy, layer) {

	//初始化
	function init() {
		$("pre.js").snippet("javascript", { style: "none", menu:false,transparent:true});
		$("pre.html").snippet("html", { style: "none", menu:false,transparent:true});
		$("pre.css").snippet("css", { style: "none", menu:false,transparent:true});
		bodyload();
	}
	init();
	
});