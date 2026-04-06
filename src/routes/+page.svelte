<script lang="ts">
	let { data } = $props();
</script>

<main>
	<h1>BusMaker</h1>
	<h2>SQLite 데이터</h2>
	<ul>
		{#each data.items as item}
			<li><strong>{item.name}</strong> — {item.description}</li>
		{/each}
	</ul>
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

		ul {
			list-style: none;
			padding: 0;

			li {
				padding: 0.5rem;
				margin: 0.25rem 0;
				background: #1a1a1a;
				border-radius: 8px;
			}
		}
	}
</style>
