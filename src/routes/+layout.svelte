<script>
	import '../app.css';
	import { alsoToday, newData, oldData, workLog } from '../store';
	export let data;

	oldData.set(JSON.parse(data.weeklyRepeats));
	newData.set(JSON.parse(data.weeklyRepeats));
	alsoToday.set(JSON.parse(data.alsoTodayRepeats));
	workLog.set(JSON.parse(data.workLog));
</script>

<slot />
