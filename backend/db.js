// const mongoose = require('mongoose');
// const mongourl = 'mongodb+srv://fastfood:fastfood123@cluster0.cpbc4ky.mongodb.net/?retryWrites=true&w=majority';
// const mongoDb= async()=>{
//     await mongoose.connect(mongourl,{useNewUrlParser:true},async(err,result)=>{
//        if(err)console.log(err);
//        else{
//         console.log("connected");
//         const featch_data=await mongoose.connection.db.collection("foodData2");
//         featch_data.find({}).toArray(function(err,data){
//             if(err)console.log(err);
//             else console.log(data);
//         })

//        }
//     });

// }    
// module.exports = mongoDb;

// const mongoose = require('mongoose');
// const mongourl = 'mongodb+srv://fastfood:fastfood123@cluster0.cpbc4ky.mongodb.net/fastfood?retryWrites=true&w=majority';

// const mongoDb = async () => {
//     await mongoose.connect(mongourl, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//     const featch_data = await mongoose.connection.db.collection("foodData2");
//     featch_data.find({}).toArray(function (err, data) {
//         if (err) console.log(err);
//         else console.log(data);


//     };

//     module.exports = mongoDb;

const mongoose = require('mongoose');
const mongourl = 'mongodb+srv://fastfood:fastfood123@cluster0.cpbc4ky.mongodb.net/fastfood?retryWrites=true&w=majority';

const mongoDb = async () => {
  try {
    // Establish MongoDB connection
    await mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Get reference to the collection "foodData2" and fetch data
    const fetch_data = await mongoose.connection.db.collection("foodData2").find({}).toArray()

    console.log("fetch_data");
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  } 
  // finally {
    
  //   mongoose.disconnect();
  // }
};

module.exports = mongoDb;

