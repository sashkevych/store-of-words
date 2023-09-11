<script>
	import '../app.css';
	import { alsoToday, newData, oldData } from '../store';
	export let data;

	oldData.set(JSON.parse(data.weeklyRepeats));
	newData.set(JSON.parse(data.weeklyRepeats));
	alsoToday.set(JSON.parse(data.alsoTodayRepeats));
</script>

<slot />
