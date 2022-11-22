const router = require('express').Router();

const customerController = require('../controllers/customerController');
/*CRUD Usuarios------------------------------------------------------- */
router.get('/a', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

/*CRUD ALERTAS------------------------------------------------------- */
router.get('/Alertas', customerController.listALERTASCRUD);
router.get('/AlertasCRUD', customerController.listALERTASCRUD);
router.post('/addAlertas', customerController.saveALERTAS);
router.get('/ActualizarAlertas/:ID', customerController.editALERTAS);
router.post('/updateAlertas/:ID', customerController.updateALERTAS);
router.get('/BorrarAlertas/:ID', customerController.deleteALERTAS);

/*CRUD PAGOS------------------------------------------------------- */
router.get('/pagos', customerController.listPAGOS);
router.get('/PagosCRUD', customerController.listPAGOSCRUD);
router.post('/addpagos', customerController.savePAGOS);
router.get('/Actualizar/:ID', customerController.editPAGOS);
router.post('/updateAlertas/:ID', customerController.updatePAGOS);
router.get('/BorrarPagos/:ID', customerController.deletePAGOS);


/*Ruta Index------------------------------------------------------- */
router.get("/", function(req, res){
    res.sendFile(__dirname + "/Index.html");    //aqui envias el HTML
    });


      /*Ruta Estilos------------------------------------------------------- */
      router.get("/Inicio", function(req, res){
        res.sendfile("./src/Inicio/layout.css");    //INICIO
      });
     router.get("/backgrounds", function(req, res){
        res.sendfile("./src/backgrounds/03.png");    //FONDO
      });
            
     router.get("/framework.css", function(req, res){
        res.sendfile("./src/Inicio/framework.css");    //INICIO
      });

      router.get("/EstilosADM", function(req, res){
        res.sendfile("./src/Estilos_Admin/layout.css");    //INICIO
      });

      router.get("/EstilosRESLOG", function(req, res){
        res.sendfile("./src/Estilos_Res/estilos.css");    //ADMIN
      });

      router.get("/EstilosRES", function(req, res){
        res.sendfile("./src/Estilos_Res/layout.css");    //INICIO
      });

      router.get("/EstilosADMLOG", function(req, res){
        res.sendfile("./src/Estilos_Admin/estilos.css");    //ADMIN
      });
      
      router.get("/webfonts", function(req, res){
        res.sendfile("./src/webfonts/css/fontawesome-all.min.css");    //ICONOS
      });
      
      router.get("/EstilosTablas", function(req, res){
        res.sendfile("./src/Alertas/layout/styles/layout.css");    //TABLAS
      });


      /*IMAGENES------------------------------------------------------- */
      router.get("/Agua", function(req, res){
        res.sendfile("./src/Pagos/images/Usuarios/1.png");    //aqui envias el HTML
      });

      router.get("/Gas", function(req, res){
        res.sendfile("./src/Pagos/images/Usuarios/3.jpg");    //aqui envias el HTML
      });

      router.get("/Luz", function(req, res){
        res.sendfile("./src/Pagos/images/Usuarios/2.png");    //aqui envias el HTML
      });


      /*ICONOS------------------------------------------------------- */
      router.get("/webfonts/fa-solid-900.ttf", function(req, res){
        res.sendfile("./src/webfonts/webfonts/fa-solid-900.ttf");    //aqui envias el HTML
      });

      router.get("/webfonts/fa-solid-900.woff", function(req, res){
        res.sendfile("./src/webfonts/webfonts/fa-solid-900.woff");    //aqui envias el HTML
      });

      router.get("/webfonts/fa-solid-900.woff2", function(req, res){
        res.sendfile("./src/webfonts/webfonts/fa-solid-900.woff2");    //aqui envias el HTML
      });

      /*RUTAS INICIO------------------------------------------------------- */

      router.get("/ADMIN", function(req, res){
        res.sendfile("./src/Administrador/Login_Admin.html");    //aqui envias el HTML
      });

      router.get("/RES", function(req, res){
        res.sendfile("./src/Residente/loginRes.html");    //aqui envias el HTML
      });

      
      /*RUTAS SCRIP------------------------------------------------------ */


      router.get("/LOGADM", function(req, res){
        res.sendfile("./src/Administrador/index_Admin.js");    //aqui envias el HTML
      });

      router.get("/LOGRES", function(req, res){
        res.sendfile("./src/Residente/index_Res.js");    //aqui envias el HTML
      });

      /*RUTAS LOGINS------------------------------------------------------ */

      router.get("/INICIOADM", function(req, res){
        res.sendfile("./src/Administrador/Inicio_Admin.html");    //aqui envias el HTML
      });

      router.get("/INICIORES", function(req, res){
        res.sendfile("./src/Residente/Inicio_Res.html");    //aqui envias el HTML
      });

module.exports = router;

