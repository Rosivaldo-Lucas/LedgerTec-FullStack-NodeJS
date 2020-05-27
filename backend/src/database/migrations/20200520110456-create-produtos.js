module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categorias', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('produtos');
  },
};
