<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="app">
	{@render children()}
</div>

<style lang="scss">
	:global(body) {
		margin: 0;
		font-family: 'Pretendard', -apple-system, sans-serif;
		background: #0a0a0a;
		color: #e0e0e0;
	}

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
