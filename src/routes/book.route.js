import express from 'express';
import * as bookController from '../controllers/books.controller';

const router = express.Router();

//route to get all books
router.get('', bookController.getBooks);

//route to get all with discounted
router.get('/disc', bookController.getDiscBooks);


export default router;
