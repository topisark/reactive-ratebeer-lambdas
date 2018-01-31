import { successResponse, errorResponse } from '../src/shared/responses';

describe('Response templates', () => {

  const expectedCorsKey = 'Access-Control-Allow-Origin';
  const expectedCorsValue = '*';

  describe('Success response', () => {

    const mockData = ['Foobeer', 'Barbeer'];
    const response = successResponse(mockData);

    test('can be created without data', () => {
      const emptyResponse = successResponse();
      expect(emptyResponse).toBeDefined();
    });

    test('has status code 200', () => {
      expect(response.statusCode).toEqual(200);
    });

    test('includes stringified data in body', () => {
      const expectedBody = JSON.stringify({ data: mockData });
      expect(typeof response.body).toEqual('string');
      expect(response.body).toEqual(expectedBody);
    });

    test('includes cors headers', () => {
      const expectedCorsKey = 'Access-Control-Allow-Origin';
      const expectedCorsValue = '*';
      expect(response.headers).toBeDefined();
      expect(response.headers[expectedCorsKey]).toEqual(expectedCorsValue);
    });

  });

  describe('Error response', () => {

    const response = errorResponse();

    test('can be created without providing error', () => {
      const emptyResponse = errorResponse();
      expect(emptyResponse).toBeDefined();
    });

    test('includes cors headers', () => {
      expect(response.headers).toBeDefined();
      expect(response.headers[expectedCorsKey]).toEqual(expectedCorsValue);
    });

    test('by default has status code 500', () => {
      expect(response.statusCode).toEqual(500);
    });

    test('has custom status code if error specifies one', () => {
      const error = { statusCode: 505 };
      const customErrorResponse = errorResponse(error);
      expect(customErrorResponse.statusCode).toEqual(error.statusCode);
    });

    test('includes stringified error in body', () => {
      const customError = { foo: "bar", bar: "foo" };
      const customErrorResponse = errorResponse(customError);
      const expectedBody = JSON.stringify({ error: customError });
      expect(typeof customErrorResponse.body).toEqual('string');
      expect(customErrorResponse.body).toEqual(expectedBody);
    });

  });

});