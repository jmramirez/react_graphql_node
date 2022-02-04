import environment from './config/environment';
import app from './express';
import db from './database';
import servicesLoader from './services';

const utils = {
  db,
};

const services = servicesLoader(utils);

(async () => {
  try {
    const serviceNames = Object.keys(services);
    for (let i = 0; i < serviceNames.length; i += 1) {
      const name = serviceNames[i];
      if (name === 'graphql') {
        await services[name].start();
        services[name].applyMiddleware({ app });
      } else {
        console.log(name);
        app.use(`/${name}`, services[name]);
      }
    }
  } catch (err) {
    console.log(err);
  }
})();

app.listen(environment.port, () => {
  console.log(`Listening on port ${environment.port}`);
});
