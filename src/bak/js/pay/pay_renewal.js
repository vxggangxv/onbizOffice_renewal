$(document).ready(function () {
	/*비상주오피스 옵션 추가선택*/
	$("#table_new tr td").on('click', function() {
		$("#table_new").find(".chk2 + span").removeClass("on");
		$(this).find(".chk2 + span").addClass("on");
		$(this).find("input").prop("checked", true);
	});
	/*라이도박스 효과 기능*/
	$("#contents .term ul li").on("click", function () {
		$(this).closest("ul").children().removeClass("on");
		$(this).addClass("on");
		$(this).closest("ul").find(".t_radio + span").removeClass("on");
		$(this).find(".t_radio + span").addClass("on");
		$(this).find("input").prop("checked", true);
	});
	/*체크박스 효과 기능*/
	$("#contents .option .o_check").on("click", function () {
		$(this).closest("li").toggleClass("on");
	});
	$("#contents .option li").on("click", function () {
		var isChecked = $(this).find("input[type=checkbox]").prop('checked');
		$(this).toggleClass("on");
		$(this).find(".o_check + span").toggleClass("on");
		isChecked = !isChecked;
		$(this).find("input[type=checkbox]").prop('checked', isChecked);
	});
	/*이용약관 4가지*/
	$("#contents .terms li .ts_check + span").on("click", function () {
		$(this).toggleClass("on");
		var isChecked = $(this).prev().prop("checked");
		//console.log(isChecked);
		isChecked = !isChecked;
		//console.log(isChecked);
		$(this).prev().prop("checked", isChecked);
	});
	/*카드 할부 선택 기능*/
	$("#contents .way li").on("click", function () {
		var thIdx = $(this).index();
		$(this).closest("ul").children().removeClass("on");
		$(this).addClass("on");
		$(this).closest("ul").find(".co_check + span").removeClass("on");
		$(this).find(".co_check + span").addClass("on");
		$(this).find("input").prop("checked", true);
		$(this).closest("ul").next().children().removeClass("on");
		$(this).closest("ul").next().children().eq(thIdx).addClass("on");
	});
	/*결제하실 금액 브라우저 너비, 높이에 따라 조절*/
	var wd = $(window).width();
	var ht = $(window).height();
	if (wd >= 768 && ht < 866) {
		setTimeout(function () {
			$(".price").addClass("on");
		}, 1000);
	}
	$(window).on("resize", function () {
		var r_wd = $(window).width();
		var r_ht = $(window).height();
		if (r_wd >= 768 && r_ht < 866) {
			setTimeout(function () {
				$(".price").removeClass("m_on");
				$(".price").addClass("on");
			}, 1000);
		} else {
			$(".price").removeClass("on");
			$(".price").addClass("m_on");
		}
	});
	/*결제하기 날짜 아이콘 클릭시 input클릭*/
	$(".selectBox input").next("i").on("click", function () {
		$(this).prev().focus();
	});
	/*주의사항 및 약관 동의 클릭시 보이기/가리기*/
	$("#panel > p i").on("click", function () {
		$(this).closest("div").children(".txtara").slideToggle();
	});
	/*주의사항 체크박스 기능*/
	$("#panel #agree + span").on("click", function () {
		$(this).toggleClass("on");
		var isChecked = $(this).prev().prop("checked");
		//console.log(isChecked);
		isChecked = !isChecked;
		//console.log(isChecked);
		$(this).prev().prop("checked", isChecked);
	});
	$("#panel #agree + span + label").on("click", function () {
		$(this).prev().toggleClass("on");
	});

});