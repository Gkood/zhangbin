define([
	'jquery',
	'template',
	'proxy',
	'layer',
	'index/index.tpl',
	'css!index/index.css'
], function($, template, proxy, layer) {

	//初始化
	function init() {
		baiMap();
		Chat();
		iPhone();
		Link();
	}
	init();

	//定位
	function baiMap() {
		$("#location").off("tap").on("tap", function() {
			myCity.get(myFun);
			layer.msg("已重新定位")
		})
		// 百度地图API功能
		function myFun(result) {
			var cityName = result.name;
			$("#location .cityName").html(cityName);
		}
		var myCity = new BMap.LocalCity();
		myCity.get(myFun);
	}

	//聊天
	function Chat() {
		$("#chat").off("tap").on("tap", function() {
			window.open("http://wpa.qq.com/msgrd?v=3&uin=979987792&site=qq&menu=yes");
		})
	}

	//电话
	function iPhone() {
		$("#iPhone").off("tap").on("tap", function() {
			window.location.href = "tel:15757181154";
		})
	}

	//点击跳转
	function Link(){
		//MUI框架
		$("#MUI").off("tap").on("tap",function(){
			mui.openWindow({
				url: 'http://www.dcloud.io/hellomui/',
				id: 'hellomui'
			});
		})
	}
});
