import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const giftsDir = join(process.cwd(), 'static/data/gifts');
const outPath = join(process.cwd(), 'static/data/ego-gifts.json');

const files = readdirSync(giftsDir).filter(f => f.endsWith('.json'));
const gifts = files.map(f => JSON.parse(readFileSync(join(giftsDir, f), 'utf-8')));

gifts.sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name, 'ko'));

writeFileSync(outPath, JSON.stringify(gifts, null, 2));
console.log(`${gifts.length}개 기프트 → ego-gifts.json 통합 완료`);
