import Pizza from '../models/pizza.model';

//get pizza
export const getPizza = async () => {
  const data = await Pizza.aggregate([{ $match: { price: { $gte: 15 } } }]);
  return data;
};

//get sized pizza
export const getSizePizza = async () => {
  
  const data = await Pizza.aggregate( [
    {
       $match: { size: "medium" }
    },
    {
       $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
    }
 ] )
  return data;
};
