export interface EgoGift {
	id: string;             // 고유 ID (파일명과 동일, 영문)
	name: string;           // 기프트 이름 (한글)
	tier: 1 | 2 | 3 | 4 | 5; // 등급 (1~5)
	keyword: string;        // 키워드 (화상, 출혈, 진동, 파열, 침잠, 호흡, 충전)
	description: string;    // 효과 설명
	upgradable: number;     // 최대 강화 단계 (0이면 강화 불가)
	recipe?: string[];      // 조합 재료 ID 목록 (없으면 조합 기프트 아님)
	themePack?: string;     // 소속 테마팩 ID (없으면 공용)
}
