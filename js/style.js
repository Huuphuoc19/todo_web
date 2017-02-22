
	function getScrollHeight(){
		var height = window.innerHeight;
		var header = document.getElementById("header");
		var headerHeight = header.clientHeight;
		return height - headerHeight;
	}

	var scrollHeight = getScrollHeight();

	// left scroll
	var leftList = document.getElementsByClassName("left-list");
	leftList = leftList[0];
	// main content
	var mainContet = document.getElementsByClassName("main-content");
	mainContet = mainContet[0];

	leftList.style.height = scrollHeight + "px";
	mainContet.style.height = scrollHeight + "px";

