import pgPromise from 'pg-promise';
import promise from 'bluebird';

const pgp = pgPromise({
  promiseLib: promise
});

// The database used for testing should be a test instance and not contain real data, but for safety delete only data with this identifier
  const testIdentifier = 'DatabaseHelperTestItem';

// Quite uglily creating and closing the DB connection in every function, but the point is to keep the helper class simple and safe
export function insertTestBeer() {
  const db = pgp(process.env.DATABASE_URL);
  const testBeer = {
    name: testIdentifier,
    brewery: testIdentifier,
    description: testIdentifier
  };
  return db.any('INSERT INTO beers (name, brewery, description) values (${name}, ${brewery}, ${description})', testBeer)
    .finally(pgp.end());
}

export function cleanUpTestData() {
  const db = pgp(process.env.DATABASE_URL);
  return db.none('DELETE FROM beers WHERE name = $1', testIdentifier)
    .finally(pgp.end());
}