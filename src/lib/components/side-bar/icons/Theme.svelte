<script>
	import { page } from '$app/stores';
	import { theme } from '../../../../store';
	export let small = false;
</script>

{#if small}
	<form action="" method="POST">
		{#if $theme == 'dark'}
			<button formaction="/?/setTheme&theme=light&redirectTo={$page.url.pathname}">
				<div class="ellipse">
					<div class="icon-text-position">
						<div class="icon">
							<span class="theme-material-symbols-outlined-small on-surface-variant-text">
								light_mode
							</span>
						</div>
						<div class="on-surface-variant-text body-large">Switch to light mode</div>
					</div>
				</div>
			</button>
		{:else}
			<button formaction="/?/setTheme&theme=dark&redirectTo={$page.url.pathname}">
				<div class="ellipse">
					<div class="icon-text-position">
						<div class="icon">
							<span class="theme-material-symbols-outlined-small on-surface-variant-text">
								dark_mode
							</span>
						</div>
						<div class="on-surface-variant-text body-large">Switch to dark mode</div>
					</div>
				</div>
			</button>
		{/if}
	</form>
{:else}
	<form class="margin" action="" method="POST">
		{#if $theme == 'dark'}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<button formaction="/?/setTheme&theme=light&redirectTo={$page.url.pathname}">
				<div class="circle outline-text">
					<span class="theme-material-symbols-outlined on-surface-variant-text"> light_mode </span>
				</div>
			</button>
		{:else}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<button formaction="/?/setTheme&theme=dark&redirectTo={$page.url.pathname}">
				<div class="circle outline-text">
					<span class="theme-material-symbols-outlined on-surface-variant-text"> dark_mode </span>
				</div>
			</button>
		{/if}
	</form>
{/if}

<style>
	/* Small */

	.icon-text-position {
		display: flex;
		align-items: center;

		gap: 0.3rem;
	}
	.ellipse {
		border-radius: 32px;

		padding-left: 15px;
		padding-right: 15px;

		padding-top: 11px;
		padding-bottom: 11px;

		border: 1px solid var(--md-sys-color-on-surface-variant);
		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;
	}

	.icon {
		display: flex;
		align-items: center;
	}

	.theme-material-symbols-outlined-small {
		font-family: 'Material Symbols Outlined';
		font-style: normal;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		font-variation-settings: 'FILL' 0, 'GRAD' 0, 'opsz' 40;
		font-size: 24px;
		font-weight: 500;
		transition: font-weight 0.3s ease;
		transition: background-color 0.3s ease;

		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ellipse:hover {
		background-color: var(--md-sys-color-on-surface-variant-2);
	}
	.ellipse:hover .theme-material-symbols-outlined-small {
		font-variation-settings: 'FILL' 1, 'GRAD' 0, 'opsz' 40;
		font-weight: 700;
	}
	.ellipse:active .theme-material-symbols-outlined-small {
		font-weight: 300;
	}

	/* Small End */

	.icon-text-position {
		display: flex;
		align-items: center;

		gap: 0.3rem;
	}

	.icon {
		display: flex;
		align-items: center;
	}

	.theme-material-symbols-outlined {
		font-family: 'Material Symbols Outlined';
		font-style: normal;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		font-variation-settings: 'FILL' 0, 'GRAD' 0, 'opsz' 40;
		font-size: 24px;
		font-weight: 500;
		transition: font-weight 0.3s ease;
		transition: background-color 0.3s ease;

		width: 56px;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle {
		width: 48px;
		height: 48px;
		stroke-width: 1px;
		border: 1px solid var(--md-sys-color-outline);
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;
	}
	.circle:hover {
		background-color: var(--md-sys-color-on-surface-variant-2);
	}
	.circle:hover .theme-material-symbols-outlined {
		font-variation-settings: 'FILL' 1, 'GRAD' 0, 'opsz' 40;
		font-weight: 700;
	}
	.circle:active .theme-material-symbols-outlined {
		font-weight: 300;
	}
</style>
