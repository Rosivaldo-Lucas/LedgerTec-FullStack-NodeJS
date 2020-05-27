import Sequelize from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';

import databaseConfig from '../config/database';

import Categoria from '../app/models/Categoria';
import Produto from '../app/models/Produto';

const models = [Categoria, Produto];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));

    Produto.associacao(this.connection.models);
    sequelizePaginate.paginate(Produto);
  }
}

export default new Database();
