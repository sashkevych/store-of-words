<script>
	import './style.css';
	import ThemeIcon from './icons/Theme.svelte';
	import NavButtons from './NavButtuns.svelte';

	import MediaQuery from './MediaQuery.svelte';
</script>

<div id="side-bar" class="surface-container" style="width: 100%; height: 100%;">
	<MediaQuery query="(min-width: 1440px)" let:matches>
		{#if matches}
			<div class="bar-container">
				<div class="nav-container">
					<NavButtons size={'large'} />
				</div>
				<div class="theme">
					<ThemeIcon />
				</div>
			</div>
		{/if}
	</MediaQuery>

	<MediaQuery query="(min-width: 1166px) and (max-width: 1439px)" let:matches>
		{#if matches}
			<div class="bar-container">
				<div class="nav-container">
					<NavButtons size={'default'} />
				</div>
				<div class="theme">
					<ThemeIcon />
				</div>
			</div>
		{/if}
	</MediaQuery>

	<MediaQuery query="(max-width: 1165px)" let:matches>
		{#if matches}
			<NavButtons size={'small'} />
		{/if}
	</MediaQuery>
</div>

<style>
</style>
