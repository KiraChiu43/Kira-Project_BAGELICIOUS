/*index.css*/
$(function(){	
	$(".JS-small img").click(function(){		
		var num = $(this).attr("id").substr(3);		
		$(".JS-big").attr( "src" , "./img/front/big_img00" + num + ".jpg" );
	});
});

/*pickup.css*/
$(".showDialogBtn").click( function () {
	$(".modal").css("display", "block"); // 顯示modal，遮住畫面背景。
	$(".dialog").css("display", "block"); // 顯示dialog。
	
	$(".dialog").animate({			   
	  opacity: '1',
	  top: '50px' // 決定對話框要滑到哪個位置停止。		   
	}, 550);
  });
  
  $(".cancelBtn").click( function () {
	$(".dialog").animate({			   
	  opacity: '0',
	  top: '-50px' // 需與CSS設定的起始位置相同，以保證下次彈出視窗的效果相同。			   
	}, 350, function () {
	  // 此區塊為callback function，會在動畫結束時被呼叫。
	  $(".modal").css("display", "none"); // 隱藏modal。
	  $(".dialog").css("display", "none"); // 隱藏dialog。
	});
  });	