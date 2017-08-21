// JavaScript Document
$(document).ready(function() {
	//info sub menu
	$('.info-sub-menu a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});
	
	$("#minus-btn").click(function(){
            if($("#number").val()-1>0){
                var newvalue = $("#number").val();
                newvalue--;
                $("#number").val(newvalue);
                changePrice();
            }
	});
	$("#plus-btn").click(function(){
                var newvalue = $("#number").val();
                newvalue++;
                $("#number").val(newvalue);	
                changePrice();
	});
});