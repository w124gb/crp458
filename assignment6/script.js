//Use an id and button
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#ex1").hide();
    });
    $("#btn2").click(function(){
        $("#ex1").show();
    });
});

	//span
	$(".green").click(function(){
        $("#colorChange").css('color','green');
    });
  
  $(".red").click(function(){
        $("#colorChange").css('color','red');
    });
	
	$(".blue").click(function(){
        $("#colorChange").css('color','blue');
    });
	
	$(".black").click(function(){
        $("#colorChange").css('color','black');
    });

  //Slide
  $(document).ready(function(){
    $("#slide").click(function(){
        $("#slide2").slideToggle("fast");
    });
});