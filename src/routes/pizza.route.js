
import express from 'express';
import * as pizzaController from '../controllers/pizza.controller';

const router = express.Router();

//route to get all books
router.get('', pizzaController.getPizza);

//route to get all with discounted
router.get('/size', pizzaController.getSizePizza);


export default router;
