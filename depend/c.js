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

function bodyload() {
	$("body").animate({
		opacity: 1
	}, 500);
}
