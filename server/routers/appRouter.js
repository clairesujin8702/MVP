const router = require('express').Router();
const controller = require('../controllers');

router.get('/payment', controller.payment.get);
router.post('/payment', controller.payment.post);
router.put('/payment', controller.payment.put);
router.delete('/payment/:paymentId', controller.payment.delete);

router.get('/favorites', controller.favorite.get);
router.post('/favorites', controller.favorite.post);
router.put('/favorites', controller.favorite.put);
router.delete('/favorites/:id', controller.favorite.delete);

router.get('/wishList', controller.wishList.get);
router.post('/wishList', controller.wishList.post);
router.put('/wishList', controller.wishList.put);
router.delete('/wishList/:id', controller.wishList.delete);

module.exports = router;
