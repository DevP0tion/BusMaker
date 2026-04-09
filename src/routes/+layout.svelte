<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
	let sidebarOpen = $state(false);

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	function closeSidebar() {
		sidebarOpen = false;
	}
</script>

<header>
	<button class="menu-btn" onclick={toggleSidebar}>
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
	</button>
	<a class="logo" href=".">
		<span class="logo-mark">BusMaker</span>
	</a>
	<div class="header-right">
		<span class="header-badge">v0.1.0</span>
		<a class="header-link" href="https://github.com/DevP0tion/BusMaker" target="_blank">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
		</a>
	</div>
</header>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="overlay" class:open={sidebarOpen} onclick={closeSidebar}></div>
<nav class="sidebar" class:open={sidebarOpen}>
	<div class="sidebar-section">
		<div class="sidebar-label">도구</div>
		<a class="nav-item active" href=".">
			<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
			덱 빌더
		</a>
		<a class="nav-item" href=".">
			<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
			거울 던전 빌더
			<span class="nav-badge">예정</span>
		</a>
		<a class="nav-item" href=".">
			<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
			스테이터스 계산기
			<span class="nav-badge">예정</span>
		</a>
	</div>
	<div class="sidebar-section">
		<div class="sidebar-label">기타</div>
		<a class="nav-item" href="info">
			<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
			정보
		</a>
	</div>
	<div style="flex:1"></div>
	<div class="sidebar-footer">
		<div class="sidebar-footer-text">
			BusMaker는 팬메이드 프로젝트이며<br>Project Moon과 무관합니다.
		</div>
	</div>
</nav>

<main class="main">
	{@render children()}
</main>

<style lang="scss">
	:global(*) { margin: 0; padding: 0; box-sizing: border-box; }

	:global(:root) {
		--bg: #0c0b0e;
		--bg-warm: #141318;
		--surface: #1a1920;
		--surface-alt: #1f1e26;
		--border: #2a2833;
		--border-light: #232230;
		--text: #d4cfc6;
		--text-muted: #7a7680;
		--text-light: #4e4b56;
		--accent: #c4483e;
		--accent-hover: #d65548;
		--accent-soft: rgba(196, 72, 62, 0.12);
		--gold: #c9a84c;
		--gold-soft: rgba(201, 168, 76, 0.1);
		--sidebar-w: 260px;
		--header-h: 56px;
	}

	:global(body) {
		font-family: 'Noto Sans KR', sans-serif;
		background: var(--bg);
		color: var(--text);
		min-height: 100vh;
		overflow-x: hidden;
	}

	header {
		position: fixed;
		top: 0; left: 0; right: 0;
		height: var(--header-h);
		background: var(--surface);
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
		padding: 0 24px;
		z-index: 100;
		gap: 16px;
	}

	.menu-btn {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
		color: var(--text);
	}

	.menu-btn :global(svg) { display: block; }

	.logo {
		display: flex;
		align-items: baseline;
		gap: 8px;
		text-decoration: none;
		color: var(--text);
	}

	.logo-mark {
		font-family: 'Outfit', sans-serif;
		font-weight: 800;
		font-size: 20px;
		letter-spacing: -0.5px;
		color: var(--accent);
	}

	.header-right {
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.header-badge {
		font-size: 11px;
		font-weight: 500;
		color: var(--gold);
		background: var(--gold-soft);
		padding: 4px 10px;
		border-radius: 4px;
		letter-spacing: 0.3px;
	}

	.header-link {
		color: var(--text-muted);
		text-decoration: none;
		font-size: 13px;
		transition: color 0.15s;
	}

	.header-link:hover { color: var(--accent); }
	.header-link :global(svg) { display: block; }

	.sidebar {
		position: fixed;
		top: var(--header-h);
		left: 0; bottom: 0;
		width: var(--sidebar-w);
		background: var(--surface);
		border-right: 1px solid var(--border);
		overflow-y: auto;
		z-index: 90;
		transition: transform 0.25s ease;
		display: flex;
		flex-direction: column;
	}

	.sidebar-section { padding: 20px 16px 8px; }

	.sidebar-label {
		font-size: 10px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		color: var(--text-light);
		margin-bottom: 10px;
		padding: 0 8px;
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px 12px;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.15s;
		font-size: 14px;
		font-weight: 400;
		color: var(--text-muted);
		text-decoration: none;
		position: relative;
	}

	.nav-item:hover { background: var(--bg-warm); color: var(--text); }

	.nav-item.active {
		background: var(--accent-soft);
		color: var(--accent);
		font-weight: 500;
	}

	.nav-item.active::before {
		content: '';
		position: absolute;
		left: 0; top: 50%;
		transform: translateY(-50%);
		width: 3px; height: 20px;
		background: var(--accent);
		border-radius: 0 3px 3px 0;
	}

	:global(.nav-icon) {
		width: 20px; height: 20px;
		flex-shrink: 0;
		opacity: 0.6;
	}

	.nav-item.active :global(.nav-icon) { opacity: 1; }

	.nav-badge {
		margin-left: auto;
		font-size: 10px;
		font-weight: 600;
		background: var(--border-light);
		color: var(--text-muted);
		padding: 2px 7px;
		border-radius: 10px;
	}

	.sidebar-footer {
		padding: 16px;
		border-top: 1px solid var(--border-light);
		margin-top: auto;
	}

	.sidebar-footer-text {
		font-size: 11px;
		color: var(--text-light);
		line-height: 1.5;
	}

	.main {
		margin-left: var(--sidebar-w);
		margin-top: var(--header-h);
		padding: 32px;
		min-height: calc(100vh - var(--header-h));
	}

	.overlay {
		display: none;
		position: fixed;
		inset: 0;
		background: rgba(0,0,0,0.6);
		z-index: 85;
	}

	.overlay.open { display: block; }

	@media (max-width: 768px) {
		.menu-btn { display: block; }
		.sidebar { transform: translateX(-100%); }
		.sidebar.open { transform: translateX(0); }
		.main { margin-left: 0; padding: 20px 16px; }
	}
</style>
