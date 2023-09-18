<script>
	import './style.css';
	import { currentDate } from '$lib/scripts/currentDate';
</script>

<div class="data-box" id="data">
	<div class="on-surface-text data-position-y headline-medium">
		{currentDate()}
	</div>
</div>
