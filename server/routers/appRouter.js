const router = require('express').Router();
const controller = require('../controllers');

router.get('/payment', controller.payment.get);
router.post('/payment', controller.payment.post);
router.put('/:paymentId', controller.payment.put);
router.delete('/:paymentId', controller.payment.delete);

router.get('/favorite', controller.favorite.get);
router.post('/favorite', controller.favorite.post);
router.put('/:favoriteId', controller.favorite.put);
router.delete('/:favoriteId', controller.favorite.delete);

router.get('/wishList', controller.wishList.get);
router.post('/wishList', controller.wishList.post);
router.put('/:wishListId', controller.wishList.put);
router.delete('/:wishListId', controller.wishList.delete);

module.exports = router;
