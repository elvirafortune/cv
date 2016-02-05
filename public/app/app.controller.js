angular.module('myApp').controller('AppCtrl', function($scope) {
  $scope.hello = 'World!';  




$(document).ready(function () {
	var rightKey, leftKey, topKey, bottomKey;
//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		}
	});

	parallax.add($("#index"))
			.add($("#me"));
	console.log (parallax.me);

	parallax.background = $("body");


	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = "";
		//$(".control").hide();
	};


	//Setting up page navigation
	parallax.index.onload=function(){
		setRight("me", "about");
		setLeft("me","about");
	};

	parallax.me.onload=function(){
		setLeft("index", "Home");
		setRight("index","Home");
	};

//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	//The fadey bits
	console.log($("#leftControl"));
	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.2);
		$("#leftText").stop().fadeTo(500,0);
	});

	console.log($("#rightControl"));
	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.2);
		$("#rightText").stop().fadeTo(500,0);
	});


	// $(".control").hide();
	parallax.index.show();

});

});