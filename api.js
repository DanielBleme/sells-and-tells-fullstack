
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var Cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Cors());
app.use('/api', router);

router.use((req, res, next) => {
    console.log('middleware');
    next();
});

router.route('/Produtos').get((req, res) => {
    dboperations.getProduto()
        .then(result => {
            res.json(result);
        })
        .catch(err => res.status(500).json(err)); 
});

router.route('/Produto/:id').patch((req, res) => {
    let Prod = { ...req.body };
    Prod.id = req.params.id; 

    
    dboperations.updateProduto(Prod)
        .then(result => {
            res.status(204).json(result);
        })
        .catch(err => res.status(500).json(err));
});

router.route('/Produto/:id').get((req, res) => {
    dboperations.getProdutoById(req.params.id)
        .then(result => {
            res.json(result[0]);
        })
        .catch(err => res.status(500).json(err));
});

router.route('/Produto/:id').delete((req, res) => {
    dboperations.DeleteProduto(req.params.id)
        .then(result => {
            res.json(result[0]);
        })
        .catch(err => res.status(500).json(err));
});

router.route('/Produto').post((req, res) => {
    let Prod = { ...req.body };

   
    dboperations.addProduto(Prod)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => res.status(500).json(err));
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('API rodando na porta: ' + port);