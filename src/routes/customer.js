const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/a', customerController.list);
router.get('/e', customerController.list2);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);


router.get("/", function(req, res){
    res.sendFile(__dirname + "/Index.html");    //aqui envias el HTML
    });
  
module.exports = router;

