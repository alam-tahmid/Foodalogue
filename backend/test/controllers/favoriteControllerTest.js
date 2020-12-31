const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('supertest');
const favorite = require('../../app');
const conn = require('../../dbConnection.js');


let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);


describe('POST /favorites', () => {

    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    });
    
    it('OK, save favorites work', (done) => {
        chai.request('http://localhost:3000').post('/favorites')
            .send({ "user_id": "bonahs01test@pfw.edu", "restaurant_url": "https://www.zomato.com/miami/tony-chans-water-club-doubletree-grand-hotel-downtown-miami?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1", "restaurant_thumb": "https://b.zmtcdn.com/data/reviews_photos/45f/d66ec450ab36b57ab2fb102ef75db45f_1559412469.jpg", "restaurant_cuisine": "Asian, Seafood, Sushi", "restaurant_name": "Tony Chan's Water Club - Doubletree Grand Hotel", "restaurant_address": "Doubletree Grand Hotel, 1717 N Bayshore Drive, Downtown Miami, Miami 33132", "user_rating": "3.7", "restaurant_menu_url": "https://www.zomato.com/miami/tony-chans-water-club-doubletree-grand-hotel-downtown-miami/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop" })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property('_id');
                expect(body).to.contain.property('user_id');
                expect(body).to.contain.property('restaurant_url');
                expect(body).to.contain.property('restaurant_thumb');
                expect(body).to.contain.property('restaurant_cuisine');
                expect(body).to.contain.property('restaurant_name');
                expect(body).to.contain.property('restaurant_address');
                expect(body).to.contain.property('user_rating');
                expect(body).to.contain.property('restaurant_menu_url');
                done();
            })
    })
})

describe('POST /deleteFav', () => {

    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    });

    it('OK, save favorites work', (done) => {
        chai.request('http://localhost:3000').post('/deleteFav')
            .send({ "user_id": "bonahs01test@pfw.edu", "restaurant_name":"Tony Chan's Water Club - Doubletree Grand Hotel"})
            .then((res) => {
                const body = res.body;
                expect(body).to.be.an('object').that.is.empty;
                done();
            })
    })
})