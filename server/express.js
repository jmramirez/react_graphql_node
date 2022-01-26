import express from 'express';
import environment from './config/environment';
import services from './services';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  try {
    const servicesNames = Object.keys(services);
    for (let i = 0; i < servicesNames.length; i += 1) {
      const name = servicesNames[i];
      if (name === 'graphql') {
        await services[name].start();
        services[name].applyMiddleware({ app });
      } else {
        console.log(name);
        app.use(`/${name}`, services[name]);
      }
    }
  } catch (e) {
    console.log(e);
  }
})();

app.get('/', (req, res) => {
  res.send('hello world');
});

export default app;
