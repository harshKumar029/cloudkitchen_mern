// const mongoose = require('mongoose');
// const mongourl = 'mongodb+srv://fastfood:fastfood123@cluster0.cpbc4ky.mongodb.net/fastfood?retryWrites=true&w=majority';

// const mongoDb = async () => {
//   try {
//     // Establish MongoDB connection
//     await mongoose.connect(mongourl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     // Get reference to the collection "foodData2" and fetch data
//     const fetch_data = await mongoose.connection.db.collection("foodData2").find({}).toArray()
    
//     const foodCategory=await mongoose.connection.db.collection("foodCategory").find({}).toArray()

//     // console.log(foodCategory);
//     global.food_items=fetch_data;
//     global.foodCategory=foodCategory;
//     // console.log(food_items);
//     console.log('Connected to MongoDB');
    
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   } 
// };

// module.exports = mongoDb;

const mongoose = require('mongoose');
const mongourl = process.env.MONGO_URI || 'mongodb+srv://fastfood:fastfood123@cluster0.cpbc4ky.mongodb.net/fastfood?retryWrites=true&w=majority';

const mongoDb = async () => {
  try {
    await mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Fetch and store data globally
    global.food_items = await mongoose.connection.db.collection("foodData2").find({}).toArray();
    global.foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

    console.log('Data fetched and stored globally');
  } catch (error) {
    console.error('Error connecting to MongoDB or fetching data:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = mongoDb;
