<script>
    import { isExtraMenu } from "../../../../store";

    function closeExtraMenu() {
        isExtraMenu.set(false)
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="back-to-main-position" role="button" tabindex="0" on:click={closeExtraMenu}>
	<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none">
		<mask
			id="mask0_213_19"
			style="mask-type:alpha"
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="24"
			height="24"
		>
			<rect width="24" height="24" fill="#D9D9D9" />
		</mask>
		<g mask="url(#mask0_213_19)">
			<path
				d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
				fill="#1C1B1F"
			/>
		</g>
	</svg>
	<div>Main menu</div>
</div>
<style>
    .back-to-main-position {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
    }
</style>