$(document).ready(function(){
  $(window).scroll( function(){
	var scrollheight=$(window).scrollTop();
	var showContentH = $('.whole').outerHeight(true) + 36 + $('.product').outerHeight(true) + $('.combo').outerHeight(true) + 50;
                
	if(scrollheight>showContentH){            
	  $(".info-sub-menu").css({position:'fixed',top:'0px',width:'940px'});
          $(".info-sub-menu").css('z-index','9999');
	}else{
	  $(".info-sub-menu").css({position:'',top:''});	  
	}		
	
  });
});