define([
	'jquery',
	'template',
	'proxy',
	'layer',
	'zoom',
	'qrcode',
	'previewimage',
	'index/index.tpl',
	'css!index/index.css'
], function($, template, proxy, layer) {

	//初始化
	function init() {
		mui.previewImage();
		erCode()
		baiMap();
		movie()
		Chat();
		iPhone();
		support();
		Link();
	}
	init();

	//二维码
	function erCode() {
		if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) { //跳到手机端
			bodyload();
		} else {
			//跳到电脑端
			$("body").empty();
			var codehtml = '<div class="ercodebox">\
								<div class="ercode" id="ercode"></div>\
								<label>暂支持移动端，微信扫一扫</label>\
							</div>';
			$("body").append(codehtml);
			$("#ercode").qrcode({
				width: 200,
				height: 200,
				text: window.location.href
			});
			bodyload();
		}
	}

	//定位
	function baiMap() {
		$("#location").off("tap").on("tap", function() {
				$(this).find(".cityName").text("定位中…").css("color", "#AAAAAA");
				//隔一段时间
				setTimeout(function() {
					myCity.get(myFun);
				}, 1000)
			})
			// 百度地图API功能
		function myFun(result) {
			var cityName = result.name;
			$("#location .cityName").text(cityName).css("color", "initial");;
		}
		var myCity = new BMap.LocalCity();
		myCity.get(myFun);
	}

	//娱票儿
	function movie() {
		$("#Wpe1").off("tap").on("tap", function() {
			window.location.href = "http://wx.wepiao.com";
		})

		$("#Wpe2").off("tap").on("tap", function() {
			window.location.href = "//wechat.show.wepiao.com/";
		})

		$("#Wpe3").off("tap").on("tap", function() {
			window.location.href = "https://sports.wepiao.com/wechat/?referrer=show";
		})
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

	//博客赞助
	function support() {
		$("#support").off("tap").on("tap", function() {
			//$(".supportImg").trigger("click");
		})
	}

	//点击跳转
	function Link() {
		//MUI框架
		$("#MUI").off("tap").on("tap", function() {
			mui.openWindow({
				url: 'http://www.dcloud.io/hellomui/',
				id: 'hellomui'
			});
		})
	}
});
