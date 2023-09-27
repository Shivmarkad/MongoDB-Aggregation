import Book from '../models/books.model';

//get all users
export const getBooks = async () => {
  const data = await Book.aggregate([
    { $match : {price:{$gte: 100}}}]);
  return data;
};
