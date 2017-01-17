// 移动端设计尺寸
var designWidth=750;
function set(){
	// 手机尺寸
	var mobileWidth=document.documentElement.clientWidth;
	// rem=手机尺寸/移动端设计尺寸
	var fontSizes=mobileWidth/designWidth*100;
	// 设置css样式
	document.documentElement.style.fontSize=fontSizes+'px';
}
set();
window.onresize=set;