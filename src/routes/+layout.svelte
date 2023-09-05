<script>
	import '../app.css';
	import { newData, oldData } from '../store';
	export let data;

	oldData.set(JSON.parse(data.weeklyRepeats));
	newData.set(JSON.parse(data.weeklyRepeats));
</script>

<slot />
