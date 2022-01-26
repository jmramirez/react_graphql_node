import environment from './config/environment';
import app from './express';

(async () => {
  try {
  } catch (e) {
    console.log(e);
    e.stack;
  }
})();

app.listen(environment.port, () => {
  console.log(`Listening on port ${environment.port}`);
});
