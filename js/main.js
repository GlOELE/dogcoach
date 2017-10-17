window.onscroll=function(){
   // console.log(window.scrollY/100);
    document.getElementById('banner').style.backgroundPosition="0% -"+window.scrollY/20+"%";
}
setTimeout(function(){
if(document.getElementsByClassName('load-animation').length>0){
	loading=document.getElementsByClassName('load-animation');
	for(var i=0;i<loading.length;i++){
		loading[i].classList.add('entrance');
	}
}},500);
window.addEventListener("scroll", function(){

	var max=window.innerHeight;
	var oright=document.getElementsByClassName('out-animation');
	for(var i=0;i<oright.length;i++){
		var pos=oright[i].getBoundingClientRect().top;
	if(pos<(max-150)){
        if(oright[i].className.indexOf('stop-animation') < 0 ){
		oright[i].classList.add('entrance')
        oright[i].classList.add('stop-animation')
            }
	}else{
		//oright[i].classList.remove('entrance')
	}
	}
});
function render(page){
    document.getElementById('banner').classList.add('out-left');
    var all=document.getElementById('main').getElementsByTagName("*");
    for(var i=0;i<all.length;i++){  
        all[i].classList.add('stop-animation');
        all[i].classList.add('out-animation');
        all[i].classList.remove('entrance');
    }
    setTimeout(function(){
    for(var i=0;i<all.length;i++){  
        document.getElementById('banner').classList.remove('out-left');
        all[i].classList.remove('stop-animation');
        all[i].classList.remove('out-animation');
        all[i].classList.add('entrance');
    }    
    },800);
}