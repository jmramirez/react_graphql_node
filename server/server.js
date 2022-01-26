import environment from './config/environment';

(async () => {
  try {
    const App = require('./express').default;
    const app = new App();
    app.listen();
  } catch (e) {
    console.log(e);
    e.stack;
  }
})();
