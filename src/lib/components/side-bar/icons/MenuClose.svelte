<div class="menu-container">
	<span class="material-menu-close on-surface-variant-text"> menu </span>
</div>

<style>
	.menu-container {
		width: 48px;
		height: 48px;
		stroke-width: 1px;
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.menu-container:active .material-menu-close{
		font-weight: 300 !important;
	}
	.menu-container:hover {
		background-color: var(--md-sys-color-surface-variant-2);
	}
	.menu-container:hover .material-menu-close {
		font-variation-settings: 'FILL' 1;
		font-weight: 600;
		transition: font-weight 0.2s ease;
	}
	.material-menu-close {
		font-family: 'Material Symbols Outlined';
		font-style: normal;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		font-variation-settings: 'FILL' 0, 'GRAD' 0, 'opsz' 40;
		font-size: 25px;
		font-weight: 500;
		transition: font-weight 0.3s ease;
		transition: background-color 0.3s ease;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
