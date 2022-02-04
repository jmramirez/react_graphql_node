import fs from 'fs';
import path from 'path';

export function registerModels(sequelize) {
  let models = {};
  const thisFile = path.basename(__filename);
  const modelFiles = fs.readdirSync(__dirname);
  const filteredModelFiles = modelFiles.filter((file) => {
    return file !== thisFile && file.slice(-3) === '.js';
  });

  for (const file of filteredModelFiles) {
    const model = require(path.join(__dirname, file)).default(sequelize);
    models[model.name] = model;
  }

  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });

  return models;
}
