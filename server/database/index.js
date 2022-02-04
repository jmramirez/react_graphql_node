import cls from 'cls-hooked';
import { Sequelize } from 'sequelize';
import { registerModels } from '../models';
import dbConfig from './../config/database';

const namespace = cls.createNamespace('transactions-namespace');
Sequelize.useCLS(namespace);

const env = process.env.NODE_ENV || 'development';
const { username, password, host, port, database, dialect } = dbConfig[env];

const sequelize = new Sequelize({
  username,
  password,
  host,
  port,
  database,
  dialect,
});

const db = {
  models: registerModels(sequelize),
  sequelize,
};

export default db;
