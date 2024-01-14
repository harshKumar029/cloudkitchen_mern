const express = require('express');
const router = express.Router();

router.post('/foodData', async (req,res)=>{
    try { 
        if (global.food_items !== undefined) {
            // console.log(global.food_items);
            res.send([global.food_items,global.foodCategory]);
          } else {
            res.status(404).json({ success: false, error: 'Data not found' });
          }
        
    } catch (error) {
        console.error('Error Displaying data:', error);
        res.json({ success: false, error: error.message }); 
    }
})
module.exports =router;