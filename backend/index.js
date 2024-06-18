// const express = require('express')
// const app = express()
// const port = 5000
// const mongoDb =require("./db");
// mongoDb();

// app.use((req,res,next)=>{
//   res.setHeader("Access-control-Allow-Origin","http://localhost:3000");
//   res.header(
//     "Access-control-Allow-headers",
//     "Origin,X-Requested-With,Content-Type,Accept"
//   );
//   next();
// })
// app.use(express.json());
// app.use('/api',require("./Routes/CreateUser"));
// app.use('/api',require("./Routes/DisplayData"));
// app.use('/api',require("./Routes/OrderData"));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const mongoDb = require('./db');
const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://fastfood-nu.vercel.app/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

// Initialize and wait for the database connection and data fetching
mongoDb().then(() => {
  app.use('/api', require('./Routes/CreateUser'));
  app.use('/api', require('./Routes/DisplayData'));
  app.use('/api', require('./Routes/OrderData'));

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((error) => {
  console.error('Failed to initialize database and start server:', error);
});
