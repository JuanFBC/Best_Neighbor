const router = require('express').Router();

const customerController = require('../controllers/customerController');
/*CRUD Usuarios------------------------------------------------------- */
router.get('/a', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

/*CRUD ALERTAS------------------------------------------------------- */
router.get('/Alertas', customerController.listALERTAS);
router.get('/AlertasCRUD', customerController.listALERTASCRUD);
router.post('/addAlertas', customerController.saveALERTAS);
router.get('/ActualizarAlertas/:id', customerController.editALERTAS);
router.post('/updateAlertas/:id', customerController.updateALERTAS);
router.get('/BorrarAlertas/:id', customerController.deleteALERTAS);

/*CRUD PAGOS------------------------------------------------------- */
router.get('/pagos', customerController.listPAGOS);
router.get('/PagosCRUD', customerController.listPAGOSCRUD);
router.post('/addpagos', customerController.savePAGOS);
router.get('/Actualizar/:id', customerController.editPAGOS);
router.post('/updateAlertas/:id', customerController.updatePAGOS);
router.get('/Borrar/:id', customerController.deletePAGOS);



router.get("/", function(req, res){
    res.sendFile(__dirname + "/Index.html");    //aqui envias el HTML
    });

router.get("/Inicio", function(req, res){
        res.sendfile("./src/Inicio/layout.css");    //aqui envias el HTML
      });
     router.get("/backgrounds", function(req, res){
        res.sendfile("../backgrounds/03.png");    //aqui envias el HTML
      });
            
     router.get("/framework.css", function(req, res){
        res.sendfile("./src/Inicio/framework.css");    //aqui envias el HTML
      });
      
      router.get("/webfonts", function(req, res){
        res.sendfile("./src/webfonts/css/fontawesome-all.min.css");    //aqui envias el HTML
      });
      
      router.get("/EstilosTablas", function(req, res){
        res.sendfile("./src/Alertas/layout/styles/layout.css");    //aqui envias el HTML
      });

      router.get("/Agua", function(req, res){
        res.sendfile("./src/Pagos/images/Usuarios/1.png");    //aqui envias el HTML
      });

      router.get("/Gas", function(req, res){
        res.sendfile("./src/Pagos/images/Usuarios/3.jpg");    //aqui envias el HTML
      });

      router.get("/Luz", function(req, res){
        res.sendfile("./src/Pagos/images/Usuarios/2.png");    //aqui envias el HTML
      });
module.exports = router;

