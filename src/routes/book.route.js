import express from 'express';
import * as userController from '../controllers/books.controller';

const router = express.Router();

//route to get all users
router.get('', userController.getBooks);

export default router;
