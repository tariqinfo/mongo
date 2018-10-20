"use strict";

class Base {
    constructor() {

        this.url = "mongodb://localhost:27017";
        this.assert = require("assert");
        this.MongoClient = require("mongodb").MongoClient;

        this.client = null;

    }
    
    get_db_obj() {

        return new Promise((resolve, reject) => {
            return this.MongoClient.connect(this.url, { useNewUrlParser: true }, (err, client) => {
                this.assert.equal(null, err);
                console.log("Connected successfully to server");
                resolve(client);
            });
        });
    }
}
module.exports = Base;
