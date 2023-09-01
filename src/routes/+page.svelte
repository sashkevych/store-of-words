<div class="container">
	<div id="item-1">Side bar</div>
	<div id="item-2">Date</div>
	<div id="item-3">Weekly</div>
	<div id="item-4">Also today</div>
	<div id="item-5">Work log</div>
	<div id="item-6">space</div>
</div>

<style>
	.container > div {
		border: 2px solid brown;
	}
	#item-1 {
		background-color: blue;
		grid-area: side-bar;
	}
	#item-2 {
		background-color: aquamarine;
		grid-area: date;
	}
	#item-3 {
		background-color: blueviolet;
		grid-area: weekly;
	}
	#item-4 {
		background-color: burlywood;
		grid-area: also-today;
	}
	#item-5 {
		background-color: chocolate;
		grid-area: work-log;
	}

	#item-6 {
		background-color: yellow;
		grid-area: right-space;
	}
</style>
