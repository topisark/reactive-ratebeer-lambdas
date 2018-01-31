import { successResponse, errorResponse } from '../shared/responses';

describe('Response templates', () => {

  describe('Success response', () => {

    const mockData = ['Foobeer', 'Barbeer'];
    const response = successResponse(mockData);

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

  // TODO: Error different types of errors: includes status code or generic 500
  describe('Error response', () => {

  });

});