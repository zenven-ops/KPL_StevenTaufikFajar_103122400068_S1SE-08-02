import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Film yg di tonton',
      version: '1.0.0',
      description: 'API sederhana dari Express untuk film-film yang pernah di tonton',
    },
  },
  apis: ['app.js'], // Membaca komentar dokumentasi dari app.js
};

export const specs = swaggerJsdoc(options);
export { swaggerUi };