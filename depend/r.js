//debug模式
var baseUrl = "/zhangbin"; //getQueryString("d")=="b"?"/shubo":"/dist";
var urlArgs = "v=1.0"; //'v=' + new Date().getTime()

//require配置
require.config({
	urlArgs: urlArgs,
	baseUrl: baseUrl,
	paths: {
		'template': 'depend/template.js/template',
		'css': 'depend/requirejs/css',
		'text': 'depend/requirejs/text',
		'proxy': 'proxy/proxy',
		'layer': 'modul/layer/layer',
		'base64': 'modul/base64/base64',
	}
});