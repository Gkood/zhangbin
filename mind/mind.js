define([
	'jquery',
	'template',
	'proxy',
	'layer',
	'css!mind/mind.css'
], function($, template, proxy, layer) {

	//初始化
	function init() {
		bodyload();
		Link();
	}
	init();
	
	//跳转
	function Link(){
		$(".mui-table-view li").eq(0).off("tap").on("tap",function(){
			mui.openWindow({
				url: '/zhangbin/mindList/userMui.html',
				id: 'userMui'
			});
		})
	}

});