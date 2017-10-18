class ItemCtrl {
    constructor(db) {
        this.db = db;
    }

    getItems(req, res) {
        return this.db.collection('items').find({}).toArray().then(items => res.status(200).json(items));
    }

    saveItems(req, res) {
        const items = req.body;
        return this.db.collection('items').insertMany(items).then(() => res.status(200));
    }
}

module.exports = ItemCtrl;