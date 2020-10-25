//셀렉팅 함수
const $ = function(query) {
	if (query[0] == '#') {
		return document.getElementById(query.slice(1));
	} else {
		return document.querySelectorAll(query);
	}
};

//태그의 속성을 제어하는 함수
const attr = function(who, what, val) {
	if (val == undefined) {
		return who.getAttribute(what);
	} else {
		who.setAttribute(what, val);
	}
};
