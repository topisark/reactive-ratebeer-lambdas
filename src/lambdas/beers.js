import { withDatabase } from '../shared/database';
import { successResponse, errorResponse } from '../shared/responses';

module.exports.handler = (event, context, callback) =>
  withDatabase(db =>
    db.getBeers()
      .then(beers => {
        callback(null, successResponse(beers));
      })
      .catch(err => {
        callback(errorResponse(err));
      }));