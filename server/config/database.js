module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'jmramirez',
    password: process.env.DB_PASSWORD || 'devapplication',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    database: process.env.DB_DATABASE || 'react_graph',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USERNAME || 'jmramirez',
    password: process.env.DB_TEST_PASSWORD || 'devapplication',
    host: process.env.DB_TEST_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    database: process.env.DB_TEST_DATABASE || 'react_graph_test',
    dialect: 'postgres',
  },
};
