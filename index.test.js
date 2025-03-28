const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {
  test('GET / doir retourner Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World!' });
  });

  test('GET /api/status doir retourner OK', async () => {
    const response = await request(app).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'OK' });
  });


  test('GET /start doir retourner START', async () => {
    const response = await request(app).get('/start');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'START' });
  });
  
});