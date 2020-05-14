const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product');
const manufacturerController = require('../../controllers/manufacturer');

// 制造商操作
router.get('/manufacturers', manufacturerController.all);       //获取所有制造商
router.get('/manufacturers/:id', manufacturerController.byId);  
router.post('/manufacturers', manufacturerController.create);
router.put('/manufacturers/:id', manufacturerController.update);
router.delete('/manufacturers/:id', manufacturerController.remove);

// 产品操作
router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

module.exports = router;
