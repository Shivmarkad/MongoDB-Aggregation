import express from 'express';
import * as userController from '../controllers/books.controller';

const router = express.Router();

//route to get all books
router.get('', userController.getBooks);

//route to get all with discounted
router.get('/disc', userController.getDiscBooks);


export default router;
