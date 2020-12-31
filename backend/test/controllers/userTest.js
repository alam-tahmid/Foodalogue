let mongoose = require("mongoose");
let User = require('../../models/User');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => {
            done();
        });
    });
});

describe('get user', () => {
    it('it should check if the user exists', (done) => {
        let user = {
            user_name: "bonahs01@pfw.edu"
        }
        chai.request('http://localhost:3000')
            .post('/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.should.be.json;
                res.should.not.equal(null);
                done();
            });
    });

});

describe('save user', () => {
    it('it should check if the user is able to sign up', (done) => {
        let user = {
            user_name: "foodie01@pfw.edu",
            user_first_name: "Foodie",
            user_last_name: "Foodie",
            user_email: "foodie01@pfw.edu",
            user_password: "Password"
        }
        chai.request('http://localhost:3000')
            .post('/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.should.be.json;
                res.should.not.equal(null);
                done();
            });
    });

});