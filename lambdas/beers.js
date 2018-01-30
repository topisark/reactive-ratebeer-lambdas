import { withDatabase } from '../shared/database';
import { successResponse, errorResponse } from '../shared/responses';

module.exports.handler = (event, context, callback) => {
  return withDatabase(db => {
    return db.getBeers()
      .then(beers => {
        callback(null, successResponse(beers));
      })
      .catch(err => {
        callback(errorResponse(err));
      })
  })
};
