const http = require('http');
const request = require('request-promise');
const Sequelize = require('sequelize');
const expect = require('chai').expect;

// Require main app
const app = require('../app');

// Connect to test database and load models
const sequelize = new Sequelize(process.env.TEST_DB_URL, { logging: false });
const models = require('../models')(sequelize);

// Start server
const PORT = 8081;
const BASEURL = `http://localhost:${PORT}`;
const HTTPserver = http.createServer(app);
HTTPserver.listen(PORT);

//////////
// User API tests
//////////

describe('User API', function() {
  // Make sure all necessary tables are present
  before(async function() {
    await models.syncAll();
  });

  describe('With an empty users table', function() {
    // Empty users table before each test
    beforeEach(async function() {
      await models.User.sync({ force: true });
    });

    it('GET /users should return an empty result', async function() {
      const req = {
        method: 'GET',
        uri: `${BASEURL}/users`,
        resolveWithFullResponse: true,
        json: true
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(200);
      expect(response.body)
        .to.have.property('data')
        .with.lengthOf(0);
    });

    it('GET /users/1 should return error 404', async function() {
      const req = {
        method: 'GET',
        uri: `${BASEURL}/users/1`,
        resolveWithFullResponse: true,
        simple: false,
        json: true
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(404);
      expect(response.body)
        .to.have.property('errors')
        .with.lengthOf(1);
    });

    it('DELETE /users/1 should return error 404', async function() {
      const req = {
        method: 'DELETE',
        uri: `${BASEURL}/users/1`,
        resolveWithFullResponse: true,
        simple: false,
        json: true
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(404);
      expect(response.body)
        .to.have.property('errors')
        .with.lengthOf(1);
    });

    it('POST /users with VALID user should create and return user', async function() {
      const newUser = {
        name: 'Test user',
        price: 10.1,
        quantity: 1
      };
      const req = {
        method: 'POST',
        uri: `${BASEURL}/users`,
        resolveWithFullResponse: true,
        simple: false,
        json: true,
        body: newUser
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(201);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.property('id');

      const added = await models.User.findOne();
      expect(added.name).to.eql(newUser.name);
      expect(added.price).to.eql(newUser.price);
      expect(added.quantity).to.eql(newUser.quantity);
    });

    it('POST /users with INVALID user should return error 400', async function() {
      const newUser = {
        name: null,
        price: 10.1,
        quantity: 1
      };
      const req = {
        method: 'POST',
        uri: `${BASEURL}/users`,
        resolveWithFullResponse: true,
        simple: false,
        json: true,
        body: newUser
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(400);
      expect(response.body)
        .to.have.property('errors')
        .with.lengthOf(1);
    });
  });

  describe('With three existing users', function() {
    beforeEach(async function() {
      await models.User.sync({ force: true });
      const productData = [
        { id: 1, name: 'Awesome user', price: 1.99, quantity: 100 },
        { id: 2, name: 'Stupendous user', price: 10.0, quantity: 10 },
        { id: 3, name: 'Insane user', price: 99.95, quantity: 5 }
      ];
      await models.User.bulkCreate(productData);
    });

    it('GET /users should return three users', async function() {
      const req = {
        method: 'GET',
        uri: `${BASEURL}/users`,
        resolveWithFullResponse: true,
        json: true
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(200);
      expect(response.body)
        .to.have.property('data')
        .with.lengthOf(3);
    });

    it('GET /users/2 should return a single matching user', async function() {
      const req = {
        method: 'GET',
        uri: `${BASEURL}/users/2`,
        resolveWithFullResponse: true,
        json: true
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data.id).to.eql(2);
      expect(response.body.data.name).to.eql('Stupendous user');
      expect(response.body.data.price).to.eql(10.0);
      expect(response.body.data.quantity).to.eql(10);
    });

    it('DELETE /users/1 should remove and return user', async function() {
      const req = {
        method: 'DELETE',
        uri: `${BASEURL}/users/1`,
        resolveWithFullResponse: true,
        simple: false,
        json: true
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data.id).to.eql(1);
      expect(response.body.data.name).to.eql('Awesome user');
      expect(response.body.data.price).to.eql(1.99);
      expect(response.body.data.quantity).to.eql(100);

      const deleted = await models.User.findById(1);
      expect(deleted).to.be.a('null');
    });

    it('PUT /users/2 with VALID data should update and return user', async function() {
      const newUser = {
        name: 'Amazeballs user',
        price: 15.95,
        quantity: 7
      };
      const req = {
        method: 'PUT',
        uri: `${BASEURL}/users/2`,
        resolveWithFullResponse: true,
        simple: false,
        json: true,
        body: newUser
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data.id).to.eql(2);
      expect(response.body.data).to.have.property('name');
      expect(response.body.data).to.have.property('price');
      expect(response.body.data).to.have.property('quantity');

      const updated = await models.User.findById(2);
      expect(updated.name).to.eql(newUser.name);
      expect(updated.price).to.eql(newUser.price);
      expect(updated.quantity).to.eql(newUser.quantity);
    });

    it('PUT /users/2 with INVALID data should return error 400', async function() {
      const newUser = {
        name: null,
        price: 15.95,
        quantity: 7
      };
      const req = {
        method: 'PUT',
        uri: `${BASEURL}/users/2`,
        resolveWithFullResponse: true,
        simple: false,
        json: true,
        body: newUser
      };

      const response = await request(req);
      expect(response.statusCode).to.equal(400);
      expect(response.body)
        .to.have.property('errors')
        .with.lengthOf(1);
    });
  });
});
