$(document).ready(function () {
	function onLoadAnimation(animationDelay) {
		console.log("Function Called");
		$(".layer1").delay(400 + animationDelay).hide("scale", { percent: 2000, direction: 'verticle' }, 2500);
		$(".layer2").delay(400 + animationDelay).hide("scale", { percent: 2000, direction: 'verticle' }, 5000);
		$(".layer3").delay(400 + animationDelay).hide("scale", { percent: 2000, direction: 'verticle' }, 8000);
		$(".invitationText").delay(2400 + animationDelay).fadeOut(300);
		$(".layer4").delay(2000 + animationDelay).fadeOut(2000, function () {
			$(".mainOpening").hide(50, function () {
				$(".mainRainContainer").delay(100).css({
					display: "block",
					opacity: "1"
				});
			});
		});
		localStorage.setItem("animationDone", true);
	}
	var animationDone = localStorage.getItem("animationDone");

	// setTimeout(function(){
	// 	onLoadAnimation(0);
	// }, 10000);

	// $(document).mousemove(function(event){
	// 	$(".leftSide").addClass("lightBlue");
	// 	$(".leftSide").removeClass("lightGreen");
	// });

	var isMoving = false;

	// $(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(event, delta) {
	// 	event.preventDefault();
	// 	if (isMoving) return;
	// 	navigateTo();
	// 	onLoadAnimation(0);
	// });

	setTimeout(function () {
		// event.preventDefault();
		if (isMoving) return;
		navigateTo();
		onLoadAnimation(0);
	}, 0);

	function navigateTo() {
		isMoving = true;
		setTimeout(function () {
			isMoving = false;
		}, 0);
	}
	let logEvent = (r) => {
		window.open("https://www.google.com/calendar/render?action=TEMPLATE&text=Madhura %26 Aaravind's Wedding&dates=20230503T003000Z/20230503T093000Z&details=Marriage Invite&location=https://goo.gl/maps/MHqDS1ZLdBX9iu4G9&sf=true&output=xml","_target")
	}
	$('.mWebNameImage').click(logEvent)
	$('.rightSide .onlyWebLoad').click(logEvent)
	$('.location-text').click(()=>{
		window.open("https://goo.gl/maps/MHqDS1ZLdBX9iu4G9","_target")
	})

	
});
