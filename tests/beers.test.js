import { beers } from '../src/lambdas/beers/handler';
import { insertTestBeer, cleanUpTestData } from './utils/database-helper';

describe('Beers lambda', () => {

  const getBeersEvent = { httpMethod: 'GET' };
  const lambdaContext = {};

  beforeAll(() => insertTestBeer());

  afterAll(() => cleanUpTestData());

  describe('GET beers invocation', () => {
    test('should not return an error', (done) => {
      beers(getBeersEvent, lambdaContext, (err) => {
        expect(err).toBeNull();
        done();
      });
    });

    test('should return a response', (done) => {
      beers(getBeersEvent, lambdaContext, (err, result) => {
        expect(result).toBeDefined();
        done();
      });
    });

    test('should return a response with status 200', (done) => {
      beers(getBeersEvent, lambdaContext, (err, result) => {
        expect(result.statusCode).toEqual(200);
        done();
      });
    });

    test('should return a response with JSON body', (done) => {
      beers(getBeersEvent, lambdaContext, (err, result) => {
        expect(typeof result.body).toEqual('string');
        const parsedBody = JSON.parse(result.body);
        expect(parsedBody).toBeDefined();
        done();
      });
    });

    test('response body should include an array of data', (done) => {
      beers(getBeersEvent, lambdaContext, (err, result) => {
        const parsedBody = JSON.parse(result.body);
        expect(Array.isArray(parsedBody.data)).toEqual(true);
        done();
      });
    });

  });

});