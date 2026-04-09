import type { PageLoad } from './$types';
import type { EgoGift } from '$lib/types/ego-gift';
import { base } from '$app/paths';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`${base}/data/gifts.json`);
	const gifts: EgoGift[] = await res.json();
	return { gifts };
};
