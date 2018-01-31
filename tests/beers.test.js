import { handler } from '../src/lambdas/beers';
import { insertTestBeer, cleanUpTestData } from './utils/database-helper';

describe('Beers lambda', () => {

  const lambdaEvent = {};
  const lambdaContext = {};

  beforeAll(() => {
    return insertTestBeer();
  });

  afterAll(() => {
    return cleanUpTestData();
  });

  describe('Successful invocation', () => {
    test('should not return an error', (done) => {
      handler(lambdaEvent, lambdaContext, (err, result) => {
        expect(err).toBeNull();
        done();
      })
    });

    test('should return a response', (done) => {
      handler(lambdaEvent, lambdaContext, (err, result) => {
        expect(result).toBeDefined();
        done();
      })
    });

    test('should return a response with status 200', (done) => {
      handler(lambdaEvent, lambdaContext, (err, result) => {
        expect(result.statusCode).toEqual(200);
        done();
      })
    });

    test('should return a response with JSON body', (done) => {
      handler(lambdaEvent, lambdaContext, (err, result) => {
        expect(typeof result.body).toEqual('string');
        const parsedBody = JSON.parse(result.body);
        expect(parsedBody).toBeDefined();
        done();
      })
    });

    test('response body should include an array of data', (done) => {
      handler(lambdaEvent, lambdaContext, (err, result) => {
        const parsedBody = JSON.parse(result.body);
        expect(Array.isArray(parsedBody.data)).toEqual(true);
        done();
      })
    });

  });

});