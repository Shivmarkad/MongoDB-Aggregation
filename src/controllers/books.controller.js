import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';

/**
 * Controller to get all Book available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getBooks = async (req, res, next) => {
  try {
    const data = await BookService.getBooks();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All books fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getDiscBooks = async (req, res, next) => {
  try {
    const data = await BookService.getDiscBooks();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Discounted books fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

