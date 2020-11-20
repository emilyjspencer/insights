

Run the test:
```
npm t - runs the tests
```

Start the server:
```
node index.js
```

Testing:

use mocha and chai for 

Routes - my general route plus two specified routes

1 - needs to return json which groups items by category
* The four categories are: food, transport, restaurant, gym membership
* When an HTTP GET request is made to that endpoint, four groups should be returned e.g.
when we make an HTTP GET reqest to 
app.get('/api/insights/categories', (request, response) => {


})

you get back the following

{
  "food": {
    "totalNumber": 3,
    "totalValue": 180,
    "averageValue": 60
  },
}

{
  "transport": {
    "totalNumber": 3,
    "totalValue": 50,
    "averageValue": 17
  },
  ...
}

{
  "gym membership": {
    "totalNumber": 2,
    "totalValue": 40,
    "averageValue": 20
  },
 
}

{
  "restaurant": {
    "totalNumber": 2,
    "totalValue": 37,
    "averageValue": 19
  },
  
}

This information should form the basis of my tests


2 - 





Extra notes

* JSON.parse() - converts json to JavaScript
* JSON.stringify() - converts JavaScript to json - for sending data as data must be sent in json format - a JSON string to be more precise


Chai testing

```
var should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);

```


```
const listOnlyCategoryInOrder = () => {
let transactions2 = transactions.map(transaction => transaction.category)
transactions2.sort()
return transactions2
}

listOnlyCategoryInOrder(transactions)
```

This method just outputs each item's category, in an array
```
[
  'food',
  'food',
  'food',
  'gym membership',
  'gym membership',
  'restaurant',
  'restaurant',
  'transport',
  'transport',
  'transport'
]
```


This gives me the correct output through a repl
```
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
    "category": "transport",
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
    "category": "gym membership",
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
    "category": "transport",
    "paymentDate": "2019-04-15T10:24:48.960Z"

  }
]

   const groupByCategory = (array, getter) => {
    const map = new Map();
    array.forEach((item) => {
         const key = getter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
   }

   

 const grouped = groupByCategory(transactions, transaction => transaction.category);

    
console.log(grouped.get("transport")); 
console.log(grouped.get("food"));
console.log(grouped.get("gym membership")) 
console.log(grouped.get("restaurant"))

```

outputs:

[
  {
    id: 2,
    amount: 20,
    merchant: 'TFL London',
    category: 'transport',
    paymentDate: '2019-02-27T14:24:48.960Z'
  },
  {
    id: 6,
    amount: 10,
    merchant: 'TFL',
    category: 'transport',
    paymentDate: '2019-03-11T09:24:48.960Z'
  },
  {
    id: 10,
    amount: 20,
    merchant: 'National Express',
    category: 'transport',
    paymentDate: '2019-04-15T10:24:48.960Z'
  }
]
[
  {
    id: 1,
    amount: 100,
    merchant: 'Tescos Ltd',
    category: 'food',
    paymentDate: '2019-01-27T14:24:48.960Z'
  },
  {
    id: 5,
    amount: 50,
    merchant: 'Asda',
    category: 'food',
    paymentDate: '2019-03-01T11:24:48.960Z'
  },
  {
    id: 9,
    amount: 30,
    merchant: 'Tesco',
    category: 'food',
    paymentDate: '2019-04-08T18:24:48.960Z'
  }
]
[
  {
    id: 4,
    amount: 20,
    merchant: 'The Gym',
    category: 'gym membership',
    paymentDate: '2019-02-31T17:24:48.960Z'
  },
  {
    id: 8,
    amount: 20,
    merchant: 'The Gym',
    category: 'gym membership',
    paymentDate: '2019-03-31T18:24:48.960Z'
  }
]
[
  {
    id: 3,
    amount: 32,
    merchant: 'Bills',
    category: 'restaurant',
    paymentDate: '2019-02-28T14:24:48.960Z'
  },
  {
    id: 7,
    amount: 5,
    merchant: 'Mcdonalds',
    category: 'restaurant',
    paymentDate: '2019-03-20T18:24:48.960Z'
  }
[
  {
    id: 2,
    amount: 20,
    merchant: 'TFL London',
    category: 'transport',
    paymentDate: '2019-02-27T14:24:48.960Z'
  },
  {
    id: 6,
    amount: 10,
    merchant: 'TFL',
    category: 'transport',
    paymentDate: '2019-03-11T09:24:48.960Z'
  },
  {
    id: 10,
    amount: 20,
    merchant: 'National Express',
    category: 'transport',
    paymentDate: '2019-04-15T10:24:48.960Z'
  }
]
[
  {
    id: 1,
    amount: 100,
    merchant: 'Tescos Ltd',
    category: 'food',
    paymentDate: '2019-01-27T14:24:48.960Z'
  },
  {
    id: 5,
    amount: 50,
    merchant: 'Asda',
    category: 'food',
    paymentDate: '2019-03-01T11:24:48.960Z'
  },
  {
    id: 9,
    amount: 30,
    merchant: 'Tesco',
    category: 'food',
    paymentDate: '2019-04-08T18:24:48.960Z'
  }
]
[
  {
    id: 4,
    amount: 20,
    merchant: 'The Gym',
    category: 'gym membership',
    paymentDate: '2019-02-31T17:24:48.960Z'
  },
  {
    id: 8,
    amount: 20,
[
  {
    id: 2,
    amount: 20,
    merchant: 'TFL London',
    category: 'transport',
    paymentDate: '2019-02-27T14:24:48.960Z'
  },
  {
    id: 6,
    amount: 10,
    merchant: 'TFL',
    category: 'transport',
    paymentDate: '2019-03-11T09:24:48.960Z'
  },
  {
    id: 10,
    amount: 20,
    merchant: 'National Express',
    category: 'transport',
    paymentDate: '2019-04-15T10:24:48.960Z'
  }
]
[
  {
    id: 1,
    amount: 100,
    merchant: 'Tescos Ltd',
    category: 'food',
    paymentDate: '2019-01-27T14:24:48.960Z'
  },
  {
    id: 5,
    amount: 50,
    merchant: 'Asda',
    category: 'food',
    paymentDate: '2019-03-01T11:24:48.960Z'
  },
  {
    id: 9,
    amount: 30,
    merchant: 'Tesco',
    category: 'food',
    paymentDate: '2019-04-08T18:24:48.960Z'
  }
]
[
  {
    id: 4,
    amount: 20,
    merchant: 'The Gym',
    category: 'gym membership',
    paymentDate: '2019-02-31T17:24:48.960Z'
  },
  {
    id: 8,
    amount: 20,
    merchant: 'The Gym',
    category: 'gym membership',
    paymentDate: '2019-03-31T18:24:48.960Z'
  }
]
[
  {
    id: 3,
    amount: 32,
    merchant: 'Bills',
    category: 'restaurant',
    paymentDate: '2019-02-28T14:24:48.960Z'
  },
  {
    id: 7,
    amount: 5,
    merchant: 'Mcdonalds',
    category: 'restaurant',
    paymentDate: '2019-03-20T18:24:48.960Z'
  }
]