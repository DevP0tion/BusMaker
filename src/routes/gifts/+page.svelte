<script lang="ts">
	import type { EgoGift } from '$lib/types/ego-gift';

	let { data } = $props();
	let gifts: EgoGift[] = $derived(data.gifts);

	let searchQuery = $state('');
	let selectedKeyword = $state('all');
	let selectedTier = $state(0);

	const keywords = ['all', '화상', '출혈', '진동', '파열', '침잠', '호흡', '충전', '참격', '관통', '타격', '범용'];
	const tiers = [0, 1, 2, 3, 4, 5];
	const tierLabel = (t: number) => t === 0 ? '전체' : `${t}등급`;

	const keywordColors: Record<string, string> = {
		'화상': '#e85d4a',
		'출혈': '#d44a6a',
		'진동': '#c9a84c',
		'파열': '#e07b39',
		'침잠': '#5b7fbf',
		'호흡': '#5fad65',
		'충전': '#a07cdb',
		'참격': '#cc5555',
		'관통': '#ccaa44',
		'타격': '#55aacc',
		'범용': '#888888',
	};

	let filtered = $derived(
		gifts.filter(g => {
			if (selectedKeyword !== 'all' && g.keyword !== selectedKeyword) return false;
			if (selectedTier !== 0 && g.tier !== selectedTier) return false;
			if (searchQuery && !g.name.includes(searchQuery)) return false;
			return true;
		})
	);

	let groupedByTier = $derived(() => {
		const groups: Record<number, EgoGift[]> = {};
		for (const g of filtered) {
			if (!groups[g.tier]) groups[g.tier] = [];
			groups[g.tier].push(g);
		}
		return groups;
	});
</script>

<div class="gifts-page">
	<div class="page-header">
		<h1>E.G.O 기프트</h1>
		<span class="count">{filtered.length}개</span>
	</div>

	<div class="filters">
		<input
			class="search"
			type="text"
			placeholder="기프트 이름 검색..."
			bind:value={searchQuery}
		/>
		<div class="filter-row">
			<div class="filter-group">
				{#each keywords as kw}
					<button
						class="chip"
						class:active={selectedKeyword === kw}
						style={selectedKeyword === kw && kw !== 'all' ? `background:${keywordColors[kw]}22;color:${keywordColors[kw]};border-color:${keywordColors[kw]}44` : ''}
						onclick={() => selectedKeyword = kw}
					>
						{kw === 'all' ? '전체' : kw}
					</button>
				{/each}
			</div>
			<div class="filter-group">
				{#each tiers as t}
					<button
						class="chip tier-chip"
						class:active={selectedTier === t}
						onclick={() => selectedTier = t}
					>
						{tierLabel(t)}
					</button>
				{/each}
			</div>
		</div>
	</div>

	{#each [5, 4, 3, 2, 1] as tier}
		{@const tierGifts = groupedByTier()[tier]}
		{#if tierGifts && tierGifts.length > 0}
			<div class="tier-section">
				<div class="tier-header">
					<span class="tier-badge tier-{tier}">{tier}등급</span>
					<span class="tier-count">{tierGifts.length}개</span>
				</div>
				<div class="gift-grid">
					{#each tierGifts as gift}
						<div class="gift-card">
							<div class="gift-top">
								<span class="gift-name">{gift.name}</span>
								<span
									class="keyword-tag"
									style="background:{keywordColors[gift.keyword]}22;color:{keywordColors[gift.keyword]}"
								>
									{gift.keyword}
								</span>
							</div>
							{#if gift.description}
								<p class="gift-desc">{gift.description}</p>
							{/if}
							{#if gift.upgradable > 0}
								<span class="upgrade-tag">강화 {gift.upgradable}단계</span>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{/each}

	{#if filtered.length === 0}
		<div class="empty">검색 결과가 없습니다.</div>
	{/if}
</div>

<style lang="scss">
	.gifts-page {
		max-width: 960px;
	}

	.page-header {
		display: flex;
		align-items: baseline;
		gap: 12px;
		margin-bottom: 20px;

		h1 {
			font-size: 20px;
			font-weight: 700;
		}

		.count {
			font-size: 13px;
			color: var(--text-muted);
		}
	}

	.filters {
		margin-bottom: 24px;
	}

	.search {
		width: 100%;
		padding: 10px 14px;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--surface);
		color: var(--text);
		font-size: 14px;
		margin-bottom: 12px;
		outline: none;
		font-family: inherit;

		&::placeholder { color: var(--text-light); }
		&:focus { border-color: var(--accent); }
	}

	.filter-row {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.filter-group {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.chip {
		padding: 5px 12px;
		border: 1px solid var(--border);
		border-radius: 6px;
		background: transparent;
		color: var(--text-muted);
		font-size: 12px;
		font-family: inherit;
		cursor: pointer;
		transition: all 0.15s;

		&:hover { border-color: var(--text-muted); }

		&.active {
			background: var(--accent-soft);
			color: var(--accent);
			border-color: var(--accent);
		}

		&.tier-chip.active {
			background: var(--accent-soft);
			color: var(--accent);
			border-color: var(--accent);
		}
	}

	.tier-section {
		margin-bottom: 28px;
	}

	.tier-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.tier-badge {
		font-size: 12px;
		font-weight: 700;
		padding: 3px 10px;
		border-radius: 4px;

		&.tier-5 { background: #c9a84c22; color: #c9a84c; }
		&.tier-4 { background: #a07cdb22; color: #a07cdb; }
		&.tier-3 { background: #5fad6522; color: #5fad65; }
		&.tier-2 { background: #5b7fbf22; color: #5b7fbf; }
		&.tier-1 { background: #88888822; color: #888888; }
	}

	.tier-count {
		font-size: 12px;
		color: var(--text-light);
	}

	.gift-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 10px;
	}

	.gift-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 14px 16px;
		transition: border-color 0.15s;

		&:hover { border-color: var(--text-light); }
	}

	.gift-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
	}

	.gift-name {
		font-size: 14px;
		font-weight: 500;
	}

	.keyword-tag {
		font-size: 11px;
		font-weight: 600;
		padding: 2px 8px;
		border-radius: 4px;
		flex-shrink: 0;
	}

	.gift-desc {
		font-size: 12px;
		color: var(--text-muted);
		line-height: 1.5;
		margin-top: 8px;
	}

	.upgrade-tag {
		display: inline-block;
		margin-top: 8px;
		font-size: 10px;
		font-weight: 600;
		color: var(--gold);
		background: var(--gold-soft);
		padding: 2px 7px;
		border-radius: 4px;
	}

	.empty {
		text-align: center;
		padding: 48px 0;
		color: var(--text-light);
		font-size: 14px;
	}

	@media (max-width: 768px) {
		.gift-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
