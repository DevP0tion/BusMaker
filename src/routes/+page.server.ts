import items from '$lib/data.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { items };
};
