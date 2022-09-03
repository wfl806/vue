let remFn = function(){
	//假设640为最大的宽度。此时设置1rem=100px
	function rem(){
		var vw=window.innerWidth //获取可视区大小
		var html=document.documentElement
		if(vw>640){
			html.style.fontSize="100px"
		}else{
			html.style.fontSize=vw/750*100+"px"
		}
	}
	rem()
	
	window.onresize=rem
	//orientationchange切换屏幕方向时触发
	window.addEventListener("orientationchange",rem)
}
export default remFn