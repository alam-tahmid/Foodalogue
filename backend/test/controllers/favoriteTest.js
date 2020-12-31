let mongoose = require("mongoose");
let Favorite = require('../../models/Favorite');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
describe('Favorites', () => {
    beforeEach((done) => { //Before each test we empty the database
        Favorite.remove({}, (err) => {
            done();
        });
    });
});

describe('get favorites', () => {
    it('it should get all the favorites of the user', (done) => {
        let fav = {
            user_id: "bonahs01@pfw.edu"
        }
        chai.request('http://localhost:3000')
            .post('/allFavorites/')
            .send(fav)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.should.be.json;
                done();
            });
    });

});