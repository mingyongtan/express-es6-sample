const request = require('supertest');
const app = require('./app');  // Your main app file

describe('Express ES6 App', () => {
  it('GET / responds with 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});