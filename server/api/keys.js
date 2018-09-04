const express = require('express');
const errors = require('../lib/errors');
const router = express.Router();

/////////
// Support functions
/////////

// Clean up JSON inputs so we only have the data we want
// Never trust the internet
const sanitizeKeys = body => {
  return {
    userId: body.userId,
    publickey: body.publicKey
  };
};

/////////
// Routes
/////////

/*
API routes loosely follow the JSON API spec:
http://jsonapi.org

Successful requests should always include a "data" key.
If something goes wrong, an "errors" array of objects must be provided.
At the very least, each error must have a `message` key (Sequelize errors
already look like this, so we're good on validation errors!).
I've decided NOT to implement everything on the spec to keep this example as
lightweight as possible.

Additional status information is provided by HTTP status codes, as The Internet
Gods intended.
*/

// models is an object containing all loaded Sequelize models
// See models/index.js
module.exports = models => {
  // GET /keys
  // Returns a JSON array containing all available user objects
  router.get('/', async (req, res) => {
    try {
      let result = await models.Key.findAll();
      res.json({ data: result });
    } catch (error) {
      res.status(400).json(errors.normalize(error));
    }
  });

  // GET /keys/:id
  // Returns a single users public keys JSON object
  router.get('/:id', async (req, res) => {
    try {
      let result = await models.Key.findAll().where({
        userId: request.params.id
      });
      if (!result) {
        res
          .status(404)
          .json(errors.normalize(`Keys id=${req.params.id} not found`));
        return;
      }
      res.json({
        data: {
          publicKey: result.publickey,
          id: result.userId
        }
      });
    } catch (error) {
      res.status(400).json(errors.normalize(error));
    }
  });

  // POST /keys
  // Inserts a new user from a JSON object
  // Returns the inserted user JSON object
  router.post('/', async (req, res) => {
    console.log('line 77', req.body);
    try {
      let result = await models.Key.create(sanitizeKeys(req.body));
      res.status(201).json({ data: result.get({ plain: true }) });
    } catch (error) {
      res.status(400).json(errors.normalize(error));
    }
  });

  // PUT /keys/:id
  // Updates a user from a JSON object
  // Returns the updated user JSON object
  router.put('/:id', async (req, res) => {
    let user = await models.Key.findById(req.params.id);
    if (!user) {
      res
        .status(404)
        .json(errors.normalize(`Key id=${req.params.id} not found`));
      return;
    }

    try {
      let result = await user.update(sanitizeKeys(req.body));
      res.json({ data: result.get({ plain: true }) });
    } catch (error) {
      res.status(400).json(errors.normalize(error));
    }
  });

  // DELETE /keys/:id
  // Deletes a user by ID
  // Returns the deleted user JSON object
  router.delete('/:id', async (req, res) => {
    let key = await models.Key.findById(req.params.id);
    if (!key) {
      res
        .status(404)
        .json(errors.normalize(`Key id=${req.params.id} not found`));
      return;
    }

    try {
      let result = await key.destroy();
      res.json({ data: key });
    } catch (error) {
      res.status(400).json(errors.normalize(error));
    }
  });

  return router;
};
