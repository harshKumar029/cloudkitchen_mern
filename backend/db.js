const mongoose = require('mongoose');
const mongourl = 'mongodb+srv://fastfood:fastfood123@cluster0.cpbc4ky.mongodb.net/fastfood?retryWrites=true&w=majority';

const mongoDb = async () => {
  try {
    // Establish MongoDB connection
    await mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Get reference to the collection "foodData2" and fetch data
    const fetch_data = await mongoose.connection.db.collection("foodData2").find({}).toArray()
    
    const foodCategory=await mongoose.connection.db.collection("foodCategory").find({}).toArray()
    // console.log(foodCategory);
    global.food_items=fetch_data;
    global.foodCategory=foodCategory;
    // console.log(food_items);
    console.log('Connected to MongoDB');
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  } 
  // finally {
    
  //   mongoose.disconnect();
  // }
};

module.exports = mongoDb;

