import { getBeersLogic, postBeerLogic } from './logic';
import { successResponse, errorResponse } from '../../shared/responses';

const logicMapping = {
  GET: getBeersLogic,
  POST: postBeerLogic
};

module.exports.beers = (event, context, callback) => {
  const { httpMethod } = event;
  return logicMapping[httpMethod](event)
    .then(response => {
      callback(null, successResponse(response));
    })
    .catch(err => {
      callback(errorResponse(err));
    });
};