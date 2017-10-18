class HomeCtrl {
    constructor() {
    }

    getHome(req, res) {
        res.send('Hello World!');
    }
}

module.exports = HomeCtrl;