require('../bootstrap');

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: process.env.DB_DIALECT,
  storage:
    process.env.NODE_ENV === 'test'
      ? process.env.DB_STORAGE_TEST
      : process.env.DB_STORAGE_DEVELOPMENT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
