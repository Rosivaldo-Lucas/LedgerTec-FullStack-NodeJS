import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        id_categoria: Sequelize.NUMBER,
      },
      {
        sequelize,
        tableName: 'produtos',
      }
    );

    return this;
  }

  static associacao(models) {
    this.belongsTo(models.Categoria, { foreignKey: 'id_categoria' });
  }
}

export default Produto;
