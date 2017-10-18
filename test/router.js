var expect = require("chai").expect;
var request = require("request");

describe('Router', () => {
    describe('Home Path', () => {
        const  url = "http://localhost:4000/api";
        it("returns status 200", (done) => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
              });
        });
        it("returns the hello world body", (done) => {
            request(url, (error, response, body) => {
                expect(body).to.equal('Hello World!');
                done();
              });
         });
    });
});