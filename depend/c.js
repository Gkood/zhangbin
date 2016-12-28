//清除地址栏#号问题
var locationHref = location.href.split("#");
if(locationHref.length > 1 && locationHref[1] == "") {
	location.href = locationHref[0];
}

/**
 * 获取url参数
 * 
 * @param name
 * @returns
 */
function getQueryString(name, url) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	if(url) {
		try {
			url = url.split("?")[1];
			var r = url.match(reg);
			if(r != null)
				return decodeURI(r[2]);
			return null;
		} catch(e) {
			return null;
		}
	} else {
		var r = window.location.search.substr(1).match(reg);
		if(r != null)
			return decodeURI(r[2]);
		return null;
	}
}

//本地存储(名称,读写类型(写入:1,读取:2),存储类型(sessionStorage:1,localStorage:2),值)
function storAge(name, type, state, value) {
	//写入存储
	if(type == "1") {
		if(state == "1") {
			sessionStorage.setItem(name, value);
		} else {
			localStorage.setItem(name, value);
		}
	} else {
		//读取存储	
		if(state == "1") {
			var value = sessionStorage.getItem(name);
			return value;
		} else {
			var value = localStorage.getItem(name);
			return value;
		}
	}
}

//mui初始化
mui.init({
	gestureConfig: {
		tap: true, //默认为true
		doubletap: true, //默认为false
		longtap: true, //默认为false
		swipe: true, //默认为true
		drag: true, //默认为true
		hold: false, //默认为false，不监听
		release: false //默认为false，不监听
	}
});

//加载渐变
function bodyload() {
	$("body").animate({
		opacity: 1
	}, 500);
}

//获取手机型号
function getPhoneType() {

	//正则,忽略大小写
	var pattern_phone = new RegExp("iPhone", "i");
	var pattern_android = new RegExp("android", "i");
	var userAgent = navigator.userAgent.toLowerCase();
	var isAndroid = pattern_android.test(userAgent);
	var isIphone = pattern_phone.test(userAgent);
	var phoneType = "phoneType";
	if(isAndroid) {
		phoneType = "一般用安卓手机的人都比较牛逼";
	} else if(isIphone) {
		//6   w=375    6plus w=414   5s w=320     5 w=320
		var wigth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if(wigth > 400) {
			phoneType = "一般用 iPhone6 Plus 的人都比较牛逼";
		} else if(wigth > 370) {
			phoneType = "一般用 iPhone 6 的人都比较牛逼";
		} else if(wigth > 315) {
			phoneType = "一般用 iPhone 5 的人都比较牛逼";
		} else {
			phoneType = "一般用 iPhone 4s 的人都比较牛逼";
		}

	} else {
		phoneType = "您的设备太先进了,好牛逼";
	}

	return phoneType;
}
