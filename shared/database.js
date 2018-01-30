import pgPromise from 'pg-promise';
import promise from 'bluebird';

// Using Bluebird to utilize finally
const pgp = pgPromise({
  promiseLib: promise
});

export function withDatabase(logic) {
  const database = new Database(process.env.DATABASE_URL);
  return logic(database)
    .finally(() => pgp.end());
}

class Database {
  constructor(connectionString) {
    this.db = pgp(connectionString);
  }

  getBeers() {
    return this.db.any('SELECT id, name, description, brewery FROM beers');
  }
}