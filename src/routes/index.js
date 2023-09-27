import express from 'express';
const router = express.Router();

import bookRoute from './book.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/books', bookRoute);

  return router;
};

export default routes;
