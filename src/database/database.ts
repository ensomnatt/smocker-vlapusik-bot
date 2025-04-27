import Database from "better-sqlite3";

const db = new Database("src/database/smoker.db");

db.prepare(
  `CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER NOT NULL,
    cgrs_count INTEGER NOT NULL DEFAULT 0,
    next_cgr INTEGER NOT NULL DEFAULT 0,
    dead INTEGER NOT NULL DEFAULT 0
  )`
).run();

export default db;
