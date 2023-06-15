const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request.get(baseUrl, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have the correct Content-Type header', (done) => {
    request.get(baseUrl, (error, response) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    const cartId = 12;
    request.get(`${baseUrl}/cart/${cartId}`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    const cartId = 'hello';
    request.get(`${baseUrl}/cart/${cartId}`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Login page', () => {
  it('Correct welcome message', (done) => {
    const username = 'Betty';
    request.post(
      `${baseUrl}/login`,
      { json: { userName: username } },
      (error, response, body) => {
        expect(body).to.equal(`Welcome ${username}`);
        done();
      }
    );
  });
});

describe('Available payments', () => {
  it('Correct payment methods', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });
});
