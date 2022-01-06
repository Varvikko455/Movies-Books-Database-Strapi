module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0ca9d9631351d1190c86b5e54bd362d9'),
  },
});
