const router = require('express').Router();

const customerController = require('../controllers/customerController');
/*CRUD Usuarios------------------------------------------------------- */
router.get('/a', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

/*CRUD Usuarios------------------------------------------------------- */
router.get('/Alertas', customerController.listALERTAS);
router.get('/AlertasCRUD', customerController.listALERTASCRUD);
router.post('/addAlertas', customerController.saveALERTAS);
router.get('/updateAlertas/:id', customerController.editALERTAS);
router.post('/updateAlertas/:id', customerController.updateALERTAS);
router.get('/deleteAlertas/:id', customerController.deleteALERTAS);


router.get("/", function(req, res){
    res.sendFile(__dirname + "/Index.html");    //aqui envias el HTML
    });
  
module.exports = router;

