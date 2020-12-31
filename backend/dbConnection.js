const mongoose = require('mongoose');
require('dotenv/config');

module.exports = {

    connect: function () {


        return new Promise((resolve, reject) => {

            //mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connnected to DB'));

            mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connnected to DB')).then((res, err)=>{
                if(err) return reject(err);
                resolve();
            });
        })

    }
}