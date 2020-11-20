const express = require('express');

const insightsRouter = require('./routers/insights');

const app = express();
// middleware
app.use('/insights', insightsRouter)

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

let transactions = [
  {
    "id": 1,
    "amount": 100,
    "merchant": "Tescos Ltd",
    "category": "food",
    "paymentDate": "2019-01-27T14:24:48.960Z"
  },
  {
    "id": 2,
    "amount": 20,
    "merchant": "TFL London",
    "category": "transport",
    "paymentDate": "2019-02-27T14:24:48.960Z"
  }, 
  { 
    "id": 3,
    "amount": 32,
    "merchant": "Bills",
    "category": "restaurant",
    "paymentDate": "2019-02-28T14:24:48.960Z"
  },
  {
    "id": 4,
    "amount": 20,
    "merchant":  "The Gym",
    "category": "gym membership",
    "paymentDate": "2019-02-31T17:24:48.960Z"
  },
  {
    "id": 5,
    "amount": 50,
    "merchant": "Asda",
    "category": "food",
    "paymentDate": "2019-03-01T11:24:48.960Z"
  },
  {
    "id": 6,
    "amount": 10,
    "merchant": "TFL",
    "cateogy": "transport",
    "paymentDate": "2019-03-11T09:24:48.960Z"
  },
  {
    "id": 7,
    "amount": 5,
    "merchant": "Mcdonalds",
    "category": "restaurant",
    "paymentDate": "2019-03-20T18:24:48.960Z"
  },
  {
    "id": 8,
    "amount": 20,
    "merchant": "The Gym",
    "category": "Gym membership",
    "paymentDate": "2019-03-31T18:24:48.960Z"
  },
  {
    "id": 9,
    "amount": 30,
    "merchant": "Tesco",
    "category": "food",
    "paymentDate": "2019-04-08T18:24:48.960Z"

  },
  {
    "id": 10,
    "amount": 20,
    "merchant": "National Express",
    "category": "travel",
    "paymentDate": "2019-04-15T10:24:48.960Z"

  }
]

// routes



module.exports = app;
