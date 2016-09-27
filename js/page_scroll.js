document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM content fully loaded and parsed");
	
	var enter = document.getElementById("enter");
	enter.addEventListener("click", clicked, false);
	
	var transitionEvent = whichTransitionEvent();
	transitionEvent && enter.addEventListener(transitionEvent, slide, true);
});

function clicked(){
	this.className += " clicked";
}

/* From Modernizr */
function whichTransitionEvent(){
	var t;
	var el = document.createElement('fakeelement');
	var transitions = {
		'transition' : 'transitionend',
		'OTransition' : 'oTransitionEnd',
		'MozTransition' : 'transitionend',
		'WebkitTransition' : 'webkitTransitionEnd'
	}

	for(t in transitions){
		if(el.style[t] !== undefined){
			return transitions[t];
		}
	}
}

function slide(e){
	if(e.currentTarget.matches("button#enter")){
		console.log(event.type);
		var button = document.getElementById("enter");
		button.style.display = 'none';

		var left_door = document.getElementById("left-door");
		var right_door = document.getElementById("right-door");
		left_door.className += " goLeft";
		right_door.className += " goRight";
		
		var modal_main = document.getElementById("modal-main");
		modal_main.className += " is-showing";
		modal_main.style.display = 'block';
	} 
}

/* Listen for a transition */
//var transitionEvent = whichTransitionEvent();
//transitionEvent && e.addEventListener(transitionEvent, function(){
//	if(e.target && e.target.matches("button#enter")){
//		var left_door = document.getElementById("left-door");
//		var right_door = document.getElementById("right-door");
//		left_door.className += " goLeft";
//		right_door.className += " goRight";
//	} 
//});
/*
 * The "whichTransitionEvent" can be swapped for "animation" instead of "transition" texts, as can the usage
 */
