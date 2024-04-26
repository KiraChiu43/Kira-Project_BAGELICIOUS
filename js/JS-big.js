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
  
  $(".exit").click( function () {
    $(".modal").css("display", "none"); // 顯示modal，遮住畫面背景。
	  $(".dialog").css("display", "none"); 
	$(".dialog").animate({			   
	  opacity: '0',
	  top: '-50px' // 需與CSS設定的起始位置相同，以保證下次彈出視窗的效果相同。			   
	}, 350, function () {
	  // 此區塊為callback function，會在動畫結束時被呼叫。
	  $(".modal").css("display", "none"); // 隱藏modal。
	  $(".dialog").css("display", "none"); // 隱藏dialog。
	});
  });	

  /*QA */
  let plus = document.querySelector(".plus")
  let qa_p = document.querySelector(".qa_p")
  plus.addEventListener("click", () => {
    qa_p.style.display =
	qa_p.style.display === "none" ? "block" : "none";
    
    // if(qa_p.style.display == 'block'){
    //   $('.qa_p').slideDown(800, 'easeInOutQuint');
    // }else{
    //   $('.qa_p').slideUp(800, 'easeInOutQuint');

    // }
  });

  let plus2 = document.querySelector(".plus2")
  let qa_p2 = document.querySelector(".qa_p2")
  plus2.addEventListener("click", () => {
    qa_p2.style.display =
	qa_p2.style.display === "none" ? "block" : "none";
 
  });

  // let plus2 = document.querySelector(".plus2")
  // let qa_p2 = document.querySelector(".qa_p2")
  // plus2.addEventListener("click", () => {
  //   qa_p2.style.transform =
	// qa_p2.style.transform === "scale(1)" ? "scale(0)" : "Scale(1)";
 
  // });

  let plus3 = document.querySelector(".plus3")
  let qa_p3 = document.querySelector(".qa_p3")
  plus3.addEventListener("click", () => {
    qa_p3.style.display =
	qa_p3.style.display === "none" ? "block" : "none";
 
  });

  
  let plus4 = document.querySelector(".plus4")
  let qa_p4 = document.querySelector(".qa_p4")
  plus4.addEventListener("click", () => {
    qa_p4.style.display =
	qa_p4.style.display == "none" ? "block" : "none";
 
  });

  let plus5 = document.querySelector(".plus5")
  let qa_p5 = document.querySelector(".qa_p5")
  plus5.addEventListener("click", () => {
    qa_p5.style.display =
	qa_p5.style.display == "none" ? "block" : "none";
 
  });
  
  // function () {
  //   let i = document.querySelectorAll(`.QA_content`);
  //   let b = i.classList[1];
  //   let seq = +b[1];
  //   console.log(b);
  // }
  // let plus5 = document.querySelector(".plus5")
  // let qa_p5 = document.querySelector(".qa_p5")
  // plus5.addEventListener("click", () => {
  //   qa_p5.style.display =
	// qa_p5.style.display == "block" ? "none" : "block";
 
  // });


  