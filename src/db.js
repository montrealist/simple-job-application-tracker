import Dexie from 'dexie';
const db = new Dexie('ApplicationsDB');
db.version(1).stores({ applications: '++id' });

export default db;