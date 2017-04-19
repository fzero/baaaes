# Baaaaes 💓

**Baaaes** is a **very opinionated** boilerplate for APIs using `async`/`await`, [Express](http://expressjs.com) and [Sequelize](http://sequelizejs.com).

The basic code was created with [`express-generator`](https://expressjs.com/en/starter/generator.html), then the following changes were added:

* Complete conversion to native ES6 syntax (i.e. you **won't** need Babel, thankfully!)
* HTTPS support included, and you can generate self-signed certificates for development by running `npm run makecert`. Note that you **will** see warning messages; use [Let's encrypt](https://letsencrypt.org/) and a real domain name to avoid this.
* [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) support baked in with configuration examples.
* Differentiated environments (`development`, `test` and `production`) defined by the `APP_ENV` environment variable.
* [Handlebars](http://handlebarsjs.com/) templates for HTML views.
* [Sequelize](http://sequelizejs.com) as default ORM, along with an example model implementation making extensive use of the `async`/`await` pattern to minimize frustration.
* Example API routes _with fully working RESTful CRUD endpoints_ included!
* [Mocha](http://mochajs.org/) integration tests for the example API are _also included!_

**Baaaes** gives you a fully fleshed-out boilerplate with woking examples and tests - you just have to jump in and modify it to your needs. I've tried to make the code as legible as possible with plenty of comments where necessary.

## Making Express great again with `async`/`await`

Let's face it, working with databases in Node was always annoying (to say the least) before the introduction of `async`/`await` in Node 7. The good news is **if your code uses promises, you can use `async`/`await` right now**.

So instead of writing an API endpoint like this...
```js
// GET /products
// Returns a JSON array containing all available product objects
router.get('/', (req, res) => {
    models.Product.findAll()
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      res.status(400).json(error)
    })
  }
})
```
...you can write this instead!
```js
router.get('/', async (req, res) => {
  try {
    res.json(await models.Product.findAll())
  }
  catch(error) {
    res.status(400).json(error)
  }
})
```

Note how you can use `try`/`catch` for async error handling - and YES, IT WORKS! 💓

## MIT License

Copyright (c) 2017 Fabio Neves

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
