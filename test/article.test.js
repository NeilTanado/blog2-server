const chai = require('chai')
const chaiHttp = require('chai-http')
// const expect = chai.expect()
const should = require('chai').should
// const expect = require('chai').expect
const app = require('../app')
const mongoose = require('mongoose')
chai.use(chaiHttp)

describe('article', function () {

  // it('should return list of article', function (done) {
  //   this.timeout(5000)
  //   chai
  //     .request(app)
  //     .get('/articles/dataarticle')
  //     .end(function(err, res){
  //       expect(res).to.have.status(200);
  //       done()
  //     })
  // })

  it('should create an article', function(done) {
    chai
      .request(app)
      .post('/articles/createarticle')
      .send({title: 'ini judul', author: 'ini author',text: 'ini text'})
      .end(function(err, res){
        res.body.should.be.an('object')
      })
      done()
  })

  // it('should update an article', function(done) {
  //   chai
  //     .request(app)
  //     .put('/articles/edit/5af9776211b0cd31e60d6f3c')
  //     .send({title: 'judul baru', author: 'author baru'})
  //     .end(function(err, res){
  //       res.body.should.be.an('object')
  //     })
  //     done()
  // })

  // it.skip('should delete an article', function(done) {
  //   chai
  //     .request(app)
  //     .del('/articles/delete/5af9776211b0cd31e60d6f3c')
  //     .end(function(err, res){
  //       res.body.should.be.an('object')
  //     })
  //     done()
  // })

  // after(function(done){
  //   mongoose.connection.db.dropCollection('articles', function(err, response){
  //     console.log('collection successfully dropped')
  //     done()
  //   })
  // })
})
