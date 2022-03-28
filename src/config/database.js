require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  // timezone: '-03:00',
  host: 'postgres',
  username: 'josuebarros1995',
  password: '12345678',
  database: 'barber',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
