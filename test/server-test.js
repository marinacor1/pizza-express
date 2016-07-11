const assert = require('assert');
const app = require('../server');
const request = require('request');

describe('Server', () => {

  before(done => { //letting mocha know for tests, listen on port 9876
    this.port = 9876;

    this.server = app.listen(this.port, (err, result) => {
      if (err) {return done(err); }
      done(); //done lets mocha know when we're ready to move on
    });

    this.request = request.defaults({
      baseUrl: 'http://localhost:9876/'
    });
  });

  after (() => {
    this.server.close();
  });


  it('should exist', () => {
    assert(app);
  });

  describe('GET /', () => {

  it('should return a 200', (done) => {
    this.request.get('/', (error, response) => {
      if (error) { done(error);}
      assert.equal(response.statusCode, 200);
      done();
    });
    });
  });
});
