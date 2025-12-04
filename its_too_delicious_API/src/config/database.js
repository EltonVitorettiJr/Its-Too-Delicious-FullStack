module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'its-too-delicious',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
