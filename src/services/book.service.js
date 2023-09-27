import Book from '../models/books.model';

//get all books
export const getBooks = async () => {
  const data = await Book.aggregate([{ $match: { price: { $gte: 100 } } }]);
  return data;
};

//get all books
export const getDiscBooks = async () => {
  
  const data = await Book.aggregate([
    {
      $match: { price: { $lte: 500 }, discountPrice: { $gte: 100 } }
    },
      {
      $group: { _id: "$price",totalPrice: { $sum:"$price" } }
    }
  ]);
  return data;
};
