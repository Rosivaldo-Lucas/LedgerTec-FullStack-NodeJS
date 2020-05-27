module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'categorias',
      [
        {
          categoria: 'Casa e Eletrodomésticos',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          categoria: 'Brinquedos e Bebês',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          categoria: 'Ferramentas e Indústria',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          categoria: 'Esporte e Lazer',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          categoria: 'Beleza e Cuidado Pessoal',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          categoria: 'Moda',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          categoria: 'Imóveis',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          categoria: 'Supermercado',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          categoria: 'Livros, Revistas e Comics',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          categoria: 'Outros',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('categorias', null, {});
  },
};
