module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, price, imageurl} = req.body;

        dbInstance.create_product([name, description, price, imageurl])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Sorry, something went wrong :(" });
                console.log(err);
            });
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product(req.params.id)
            .then(product => res.status(200).send(product))
            .catch(err => {
                res.status(500).send({ errorMessage: "Sorry, something went wrond :(" });
                console.log(err);
            });
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: "Sorry, something went wrond :(" });
                console.log(err);
            });
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.update_product([req.params.id, req.query.desc])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Sorry, something went wrond :(" });
                console.log(err);
            });
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product(req.params.id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Sorry, something went wrond :(" });
                console.log(err);
            });
    }
}