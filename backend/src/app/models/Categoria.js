import Sequelize, { Model } from 'sequelize';

class Categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        categoria: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'categorias',
      }
    );
  }
}

export default Categoria;
