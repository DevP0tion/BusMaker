import Database from 'better-sqlite3';

const db = new Database('static/data.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
  )
`);

const insert = db.prepare('INSERT INTO items (name, description) VALUES (?, ?)');
const items = [
  ['테스트 아이템 A', '첫 번째 아이템입니다'],
  ['테스트 아이템 B', '두 번째 아이템입니다'],
  ['테스트 아이템 C', '세 번째 아이템입니다'],
];

for (const [name, desc] of items) {
  insert.run(name, desc);
}

console.log('DB 초기화 완료:', db.prepare('SELECT COUNT(*) as count FROM items').get());
db.close();
