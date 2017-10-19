const expect = require("chai").expect;
const request = require("request");
const app = require('../app/app');
const Random = require('./utils/random');

const port = 3330;
const db = `sandbox_test_${Random.hexString(10)}`;
const baseUrl = `http://localhost:${port}/api`

describe('Sandbox App', () => {
    before((done) => {
        app.startTheApp(port, db);
        app.on('appStarted', () => {
            done();
        });
    });
    after(() => {
        app.serverObj.close();
    });
    describe('Router generic paths', () => {
        describe('Home Path', () => {
            it("returns status 200", (done) => {
                request(baseUrl, (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });
            it("returns the hello world body", (done) => {
                request(baseUrl, (error, response, body) => {
                    expect(body).to.equal('Hello World!');
                    done();
                });
            });
        });
        describe('Invalid Path', () => {
            const url = `${baseUrl}/${Random.hexString(30)}`;
            it("returns status 404", (done) => {
                request(url, (error, response, body) => {
                    expect(response.statusCode).to.equal(404);
                    done();
                });
            });
            it("returns the oops body", (done) => {
                request(url, (error, response, body) => {
                    expect(body).to.equal('Oops, wrong way!');
                    done();
                });
            });
        });
    });

    describe('Items', () => {
        describe('Save items', () => {
            const url = `${baseUrl}/items`;
            const items = [{ id: 7, name: 'abc' }, { id: 9, name: 'def' }];
            it('POSTs 2 items', (done) => {
                request.post({ uri: url, json: items }, (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    expect(body.count).to.equal(2);
                    done();
                })
            });
            it('verifies saved items', (done) => {
                request.get(url, (error, response, body) => {
                    let data = JSON.parse(body) || [];
                    expect(data).to.deep.equal(items);
                    done();
                });
            });
        })
    });
});