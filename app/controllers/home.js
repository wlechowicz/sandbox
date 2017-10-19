class HomeCtrl {
    constructor() {
    }

    getHome(req, res) {
        res.send('Hello World!');
    }

    notFound(req, res) {
        res.status(404).send('Oops, wrong way!');
    }

}

module.exports = HomeCtrl;