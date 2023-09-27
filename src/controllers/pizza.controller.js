import HttpStatus from 'http-status-codes';
import * as PizzaService from '../services/pizza.service'
/**
 * Controller to get all pizza available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const getPizza = async (req, res, next) => {
  try {
    const data = await PizzaService.getPizza();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All pizza fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getSizePizza = async (req, res, next) => {
  try {
    const data = await PizzaService.getSizePizza();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Sized pizza fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

