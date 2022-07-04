const express = require("express");
const getUserAgent = require("./component/user.agent");
const app = express();
const port = 3040;
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/:string", (req, res) => {
  const string = req.params.string;
  const userAgent = getUserAgent(string);
  //   res.json(userAgent);
  res.send(userAgent);
});

app.use(function (req, res, next) {
  const userAgent = getUserAgent();
  res.send(userAgent);
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.json({
    code: -1,
    message: err.message,
  });
  // res.status(500);
  // res.send({"code":-1,"message":"server error"});
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log("pid:", process.pid);
});
