const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

/**
 * @api {post} /echo Echo data
 * @apiName EchoData
 * @apiGroup Echo
 * @apiDescription This endpoint echoes back the received data.
 *
 * @apiParam {Object} body The data to be echoed.
 *
 * @apiSuccess {Object} body The echoed data.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "echo": { "key": "value" }
 *     }
 *
 * @apiError (Error 400) BadRequest The request body is invalid.
 */
app.post("/echo", (req, res) => {
  console.log(req.body);
  res.send({ echo: req.body });
});

/**
 * @api {get} /hello Get greeting
 * @apiName GetGreeting
 * @apiGroup Greeting
 * @apiDescription This endpoint returns a greeting message.
 *
 * @apiSuccess {String} message The greeting message.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "Hello"
 */
app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
