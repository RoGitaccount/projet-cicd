const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {
  test('GET / doir retourner \"Test du workflow CI/CD\"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Test du workflow CI/CD' });
  });

  test('GET /api/status doir retourner OK', async () => {
    const response = await request(app).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'OK' });
  });


  test('GET /start doir retourner STOP', async () => {
    const response = await request(app).get('/start');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'STOP' });
  });
  
});