<div class="section-title">도구 목록</div>
<div class="tool-grid">
	<div class="tool-card">
		<div class="tool-card-title">덱 빌더</div>
		<div class="tool-card-desc">수감자별 인격과 E.G.O를 선택하여 편성을 구성하고 저장할 수 있습니다.</div>
		<span class="tool-card-tag tag-ready">사용 가능</span>
	</div>
	<div class="tool-card disabled">
		<div class="tool-card-title">거울 던전 빌더</div>
		<div class="tool-card-desc">거울 던전 공략용 층별 편성과 E.G.O 선택을 계획합니다.</div>
		<span class="tool-card-tag tag-soon">준비 중</span>
	</div>
	<div class="tool-card disabled">
		<div class="tool-card-title">스테이터스 계산기</div>
		<div class="tool-card-desc">레벨, 동기화 단계별 스테이터스 수치를 시뮬레이션합니다.</div>
		<span class="tool-card-tag tag-soon">준비 중</span>
	</div>
</div>

<style lang="scss">
	.section-title {
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: var(--text-light);
		margin-bottom: 16px;
	}

	.tool-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 16px;
	}

	.tool-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 10px;
		padding: 24px;
		cursor: pointer;
		transition: all 0.2s;
	}

	.tool-card:hover {
		border-color: var(--accent);
		box-shadow: 0 2px 12px rgba(196, 72, 62, 0.08);
		transform: translateY(-2px);
	}

	.tool-card.disabled { opacity: 0.5; cursor: not-allowed; }
	.tool-card.disabled:hover { border-color: var(--border); box-shadow: none; transform: none; }

	.tool-card-title { font-weight: 600; font-size: 15px; margin-bottom: 6px; }
	.tool-card-desc { font-size: 13px; color: var(--text-muted); line-height: 1.5; }

	.tool-card-tag {
		display: inline-block;
		margin-top: 12px;
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.5px;
		padding: 3px 8px;
		border-radius: 4px;
		text-transform: uppercase;
	}

	.tag-ready { background: rgba(76, 175, 80, 0.12); color: #66bb6a; }
	.tag-soon { background: var(--bg-warm); color: var(--text-light); }

	@media (max-width: 768px) {
		.tool-grid { grid-template-columns: 1fr; }
	}
</style>
