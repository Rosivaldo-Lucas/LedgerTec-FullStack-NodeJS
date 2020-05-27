// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    faker.locale = 'pt_BR';
    const dados = [];
    const produtoRandom = [];

    let cont = 0;

    const produto = faker.commerce.productName();
    produtoRandom.push(produto);

    while (cont <= 40) {
      const produtoAux = faker.commerce.productName();

      const produtoExiste = produtoRandom.find((p) => p === produtoAux);

      if (!produtoExiste) {
        produtoRandom.push(produtoAux);
        cont += 1;
      }
    }

    for (let i = 0; i < 40; i += 1) {
      const seedProduto = {
        descricao: produtoRandom[i],
        id_categoria: Math.floor(Math.random() * 10) + 1,
        created_at: new Date(),
        updated_at: new Date(),
      };

      dados.push(seedProduto);
    }

    return queryInterface.bulkInsert('produtos', dados, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('produtos', null, {});
  },
};
