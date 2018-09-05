const express = require("express");
const errors = require("../lib/errors");
const router = express.Router();
// const { signToken, verifyToken } = require('../.authapp');

/////////
// Support functions
/////////

// Clean up JSON inputs so we only have the data we want
// Never trust the internet
const sanitizeUser = body => {
  return {
    // id: window.localStorage.userid,
    username: body.username,
    email: body.email,
    password: body.password
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
  // GET /users
  // Returns a JSON array containing all available user objects
  router.get("/", async (req, res) => {
    try {
      let result = await models.User.findAll();
      res.json({ data: result });
    } catch (error) {
      res.status(400).json(errors.normalize(error));
    }
  });

  // GET /users/:id
  // Returns a single user JSON object
  router.get("/:id", async (req, res) => {
    try {
      let result = await models.User.findById(req.params.id);
      if (!result) {
        res
          .status(404)
          .json(errors.normalize(`User id=${req.params.id} not found`));
        return;
      }
      res.json({
        id: result.id,
        username: result.username,
        email: result.email,
        tutorialcomplete: result.tutorialcomplete
      });
    } catch (error) {
      res.status(400).json(errors.normalize(error));
    }
  });

  // POST /users
  // Inserts a new user from a JSON object
  // Returns the inserted user JSON object
  router.post("/", async (req, res) => {
    console.log("line 77", req.body);
    try {
      let result = await models.User.create(sanitizeUser(req.body));
      res.status(201).json({ data: result.get({ plain: true }) });
    } catch (error) {
      res.status(400).json(errors.normalize(error));
    }
  });

  // PUT /users/:id
  // Updates a user from a JSON object
  // Returns the updated user JSON object
  router.put("/:id", async (req, res) => {
    let user = await models.Key.findAll({
      where: {
        userId: req.params.id
      }
    });
    if (!user) {
      res
        .status(404)
        .json(errors.normalize(`User id=${req.params.id} not found`));
      return;
    }

    try {
      let result = await user.update(sanitizeUser(req.body));
      res.json({ data: result.get({ plain: true }) });
    } catch (error) {
      res.status(400).json(errors.normalize(error));
    }
  });

  // // DELETE /users/:id
  // // Deletes a user by ID
  // // Returns the deleted user JSON object
  // router.delete('/:id', async (req, res) => {
  //   let user = await models.User.findById(req.params.id);
  //   if (!user) {
  //     res
  //       .status(404)
  //       .json(errors.normalize(`User id=${req.params.id} not found`));
  //     return;
  //   }

  //   try {
  //     let result = await user.destroy();
  //     res.json({ data: user });
  //   } catch (error) {
  //     res.status(400).json(errors.normalize(error));
  //   }
  // });

  return router;
};
