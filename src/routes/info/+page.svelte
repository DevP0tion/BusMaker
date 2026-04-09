<div class="info-page">
	<h1>정보</h1>

	<section>
		<h2>BusMaker</h2>
		<p>림버스 컴퍼니 플레이어를 위한 팬메이드 유틸리티입니다.</p>
		<dl>
			<dt>버전</dt>
			<dd>0.1.0</dd>
			<dt>라이선스</dt>
			<dd>MIT</dd>
			<dt>GitHub</dt>
			<dd><a href="https://github.com/DevP0tion/BusMaker" target="_blank">DevP0tion/BusMaker</a></dd>
		</dl>
	</section>

	<section>
		<h2>면책 조항</h2>
		<p>본 프로젝트는 팬메이드이며, Project Moon 및 림버스 컴퍼니와 공식적인 관련이 없습니다.</p>
		<p>게임 내 데이터의 저작권은 Project Moon에 있습니다.</p>
	</section>

	<section>
		<h2>문의 및 기여</h2>
		<p>버그 리포트, 데이터 수정 요청, 기능 제안은 <a href="https://github.com/DevP0tion/BusMaker/issues" target="_blank">GitHub Issues</a>를 이용해 주세요.</p>
	</section>
</div>

<style lang="scss">
	.info-page {
		max-width: 640px;

		h1 {
			font-size: 20px;
			font-weight: 700;
			margin-bottom: 28px;
			color: var(--text);
		}

		section {
			background: var(--surface);
			border: 1px solid var(--border);
			border-radius: 10px;
			padding: 24px;
			margin-bottom: 16px;
		}

		h2 {
			font-size: 15px;
			font-weight: 600;
			margin-bottom: 12px;
			color: var(--text);
		}

		p {
			font-size: 13px;
			color: var(--text-muted);
			line-height: 1.7;
			margin-bottom: 8px;

			&:last-child { margin-bottom: 0; }
		}

		dl {
			display: grid;
			grid-template-columns: 80px 1fr;
			gap: 8px 16px;
			font-size: 13px;
		}

		dt {
			color: var(--text-light);
			font-weight: 500;
		}

		dd {
			color: var(--text);
		}

		a {
			color: var(--accent);
			text-decoration: none;

			&:hover { text-decoration: underline; }
		}
	}
</style>
