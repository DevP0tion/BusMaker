import Database from 'better-sqlite3';
import { writeFileSync } from 'fs';

const db = new Database('data/data.db', { readonly: true });
const items = db.prepare('SELECT * FROM items').all();
writeFileSync('src/lib/data.json', JSON.stringify(items, null, 2));
console.log(`내보내기 완료: ${items.length}건`);
db.close();
