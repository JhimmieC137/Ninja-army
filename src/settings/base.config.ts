export const baseConfig = () => ({
  jwt_secret: process.env.JWT_SECRET,
  port: process.env.PORT,
});

//Spilit config into different files
