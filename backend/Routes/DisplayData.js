// const express = require('express');
// const router = express.Router();

// router.post('/foodData', async (req,res)=>{
//     try { 
//         if (global.food_items !== undefined) {
//             // console.log(global.food_items);
//             res.send([global.food_items,global.foodCategory]);
//           } else {
//             res.status(404).json({ success: false, error: 'Data not found' });
//           }
        
//     } catch (error) {
//         console.error('Error Displaying data:', error);
//         res.json({ success: false, error: error.message }); 
//     }
// })
// module.exports =router;
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/foodData', async (req, res) => {
  try {
    const fetch_data = await mongoose.connection.db.collection("foodData2").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

    if (fetch_data.length > 0 && foodCategory.length > 0) {
      res.send([fetch_data, foodCategory]);
    } else {
      res.status(404).json({ success: false, error: 'Data not found' });
    }
  } catch (error) {
    console.error('Error displaying data:', error);
    res.json({ success: false, error: error.message });
  }
});

module.exports = router;
