<script lang="ts">
	let count: number = $state(0);

	function increment(): void {
		count++;
	}
</script>

<main>
	<h1>SvelteKit + Bun + SCSS</h1>
	<p>카운트: <strong>{count}</strong></p>
	<button onclick={increment}>+1</button>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 2rem;

		h1 {
			font-size: 2rem;
			background: linear-gradient(135deg, #ff6b6b, #ffa66b);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		button {
			margin-top: 1rem;
			padding: 0.75rem 2rem;
			font-size: 1.2rem;
			border: none;
			border-radius: 8px;
			background: #ff6b6b;
			color: white;
			cursor: pointer;
			transition: transform 0.15s;

			&:hover {
				transform: scale(1.05);
			}
		}
	}
</style>
