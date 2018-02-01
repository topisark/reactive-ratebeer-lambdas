import { withDatabase } from '../../shared/database';

export const postBeerLogic = (event) => {
  const beer = JSON.parse(event.body);
  return withDatabase(db =>
    db.insertBeer(beer)
  );
};

export const getBeersLogic = () =>
  withDatabase(db =>
    db.getBeers()
  );
