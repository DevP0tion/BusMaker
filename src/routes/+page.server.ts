import db from '$lib/db';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const items = db.prepare('SELECT * FROM items').all();
	return { items };
};
