<script>
	import MenuClose from './MenuClose.svelte';
	import MenuOpen from './MenuOpen.svelte';
	import Theme from './theme.svelte';

	let visible = false;
	function toggleView() {
		visible = !visible;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu-position" role="button" on:click={toggleView} tabindex="0">
	{#if visible}
		<MenuOpen />
	{:else}
		<MenuClose />
	{/if}
</div>

{#if visible}
	<div class="open-menu">
		<div>
      <div class="top-icon" role="button" on:click={toggleView} tabindex="0"><MenuOpen /></div>
      <div>Home</div>
      <div>Weekly</div>
      <div>Also today</div>
      <div>Work log</div>
    </div>

		<div class="theme">
      <Theme />
    </div>
	</div>
{/if}

<style>
  .top-icon {
    margin-top: 18px;
  }
	.menu-position {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.open-menu {
		height: 100vh;
		width: 320px;
		position: absolute;
		top: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    
		background-color: sandybrown;
	}
  .open-menu > div {
    margin-left: 18px;
  }
	.main {
		height: 100vh;
		background-color: rgb(173, 255, 47);
	}
	.bg {
		background-color: rgba(173, 255, 47, 0.32);
	}
</style>
