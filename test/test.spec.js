const chai = require('chai');
// requiring chai
const rp = require('request-promise');

chai.should();

async function request(path) {
  return rp({
    url: `http://localhost:3000/insights/${path}`,
    method: 'GET',
    json: true,
    resolveWithFullResponse: true, // promise resolves with full response not just body. 
    simple: false   // ensures promise resolves even if statusCode is not 200 series.
  });
}

describe('Insights Service', () => {

  describe('/categories', () => {
    context('it is yet to be implemented', () => {
      it('should return a 501 error', async () => {
        const response = await request('/categories');
        response.statusCode.should.equal(501);
      });
    });

    describe('/categories', () => {
      it('should return a 200 status code', async () => {
        const response = await request('/categories');
        response.statusCode.should.equal(200);
      });
    })

    describe('/categories', () => {
      context('food', () => {
        it('should return a total value of 180', async () => {
          const response = await request('/categories/food');
          response.statusCode.should.equal(200);
          response.body.totalValue.should.equal(180);
        })

        it('should return a total number of 3', async () => {
          const response = await request('/categories/food');
          response.statusCode.should.equal(200);
          response.body.totalNumber.should.equal(3);
        })

        it('should return an average value of 60', async () => {
          const response = await request('/categories/food');
          response.statusCode.should.equal(200);
          response.body.averageValue.should.equal(60);
        })
      })
    })

    describe('/categories', () => {
      context('transport', () => {
        it('should return a total value of 50', async () => {
          const response = await request('/categories/transport');
          response.statusCode.should.equal(200);
          response.body.averageValue.should.equal(50);
        })

        it('should return a total number of 3', async () => {
          const response = await request('/categories/transport');
          response.statusCode.should.equal(200);
          response.body.totalNumber.should.equal(3);
        })

        it('should return an average value of 17', async () => {
          const response = await request('/categories/transport');
          response.statusCode.should.equal(200);
          response.body.averageValue.should.equal(17);
        })
      })
    })

    describe('/categories', () => {
      context('gym membership', () => {
        it('should return a total value of 40', async () => {
          const response = await request('/categories/gymmembership');
          response.statusCode.should.equal(200);
          response.body.totalValue.should.equal(40);
        })

        it('should return a total number of 2', async () => {
          const response = await request('/categories/gymmembership');
          response.statusCode.should.equal(200);
          response.body.totalNumber.should.equal(2);
        })

        it('should return an average value of 20', async () => {
          const response = await request('/categories/gymmembership');
          response.statusCode.should.equal(200);
          response.body.averageValue.should.equal(20);
        })
      })
    })

    describe('/categories', () => {
      context('restaurant', () => {
        it('should return a total value of 37', async () => {
          const response = await request('/categories/restaurant');
          response.statusCode.should.equal(200);
          response.body.averageValue.should.equal(37);
        })

        it('should return a total number of 2', async () => {
          const response = await request('/categories/restaurant');
          response.statusCode.should.equal(200);
          response.body.totalNumber.should.equal(2);
        })

        it('should return an average value of 19', async () => {
          const response = await request('/categories/restaurant');
          response.statusCode.should.equal(200);
          response.body.averageValue.should.equal(19);
        })
      })
    })

  });



  describe('/cashflow', () => {
    context('it is yet to be implemented', () => {
      it('should return a 501 error', async () => {
        const response = await request('/cashflow');
        response.statusCode.should.equal(501);
      });
    });

    describe('/cashflow', () => {
      it('should return a status code of 200', async () => {
        const response = await request('/cashflow');
        response.statusCode.should.equal(200)
      })
    })


  });
});

describe('get all transactions', () => {
it('gets all transactions from /api/transactions', async () => {
  const response = await request('/api/transactions');
      response.statusCode.should.equal(200);
      response.body.length.should.equal(10);
    });
  
});

describe('get one transaction', () => {
  it('gets a particular transaction with from /api/transactions/2', async () => {
    const response = await request('/api/transactions/2');
    response.statusCode.should.equal(200);
    response.body.length.should.equal(1);
    response.body.id.should.equal(2);
  })
})



 