class ItemCtrl {
    constructor(db) {
        this.db = db;
    }

    getItems(req, res) {
        this.db.collection('items').find({}).toArray().then(items => res.status(200).json(items));
    }

    saveItems(req, res) {
        const items = req.body;
        // this doesn't respond, why?
        this.db.collection('items').insertMany(items).then((r) => res.status(200).json({ status: 'OK', count: r.insertedCount || 0}));
    }
}

module.exports = ItemCtrl;