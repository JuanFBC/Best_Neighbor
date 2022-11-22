const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM residente', (err, residentes) => {
     if (err) {
      res.json(err);
     }
     res.render('residentes', {
        data: residentes
     });
    });
  });
};



controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO residente set ?', data, (err, residente) => {
      console.log(residente)
      res.redirect('/a');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM residente WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newresidente = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE residente set ? where id = ?', [newresidente, id], (err, rows) => {
    res.redirect('/a');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM residente WHERE id = ?', [id], (err, rows) => {
      res.redirect('/a');
    });
  });
}

/* <Control Tablas Alertas--------------------------------------------------------------------------------------------------------------------> */

controller.listALERTAS = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM ALERTAS', (err, Alertas) => {
     if (err) {
      res.json(err);
     }
     res.render('Alertas_Res', {
        data: Alertas
     });
    });
  });
};
controller.listALERTASCRUD = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM ALERTAS', (err, Alertas) => {
     if (err) {
      res.json(err);
     }
     res.render('Alertas_ADM', {
        data: Alertas
     });
    });
  });
};

controller.saveALERTAS = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO ALERTAS set ?', data, (err, Alertas) => {
      console.log(Alertas)
      res.redirect('/AlertasCRUD');
    })
  })
};

controller.editALERTAS = (req, res) => {
  const { ID } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM ALERTAS WHERE ID = ?", [ID], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.updateALERTAS = (req, res) => {
  const { ID } = req.params;
  const newresidente = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE ALERTAS set ? where ID = ?', [newresidente, ID], (err, rows) => {
    res.redirect('/AlertasCRUD');
  });
  });
};

controller.deleteALERTAS = (req, res) => {
  const { ID } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM ALERTAS WHERE ID = ?', [ID], (err, rows) => {
      res.redirect('/AlertasCRUD');
    });
  });
}

/* <Control Tablas Pagos--------------------------------------------------------------------------------------------------------------------> */

controller.listPAGOS = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM PAGOS', (err, residentes) => {
     if (err) {
      res.json(err);
     }
     res.render('Pagos_RES', {
        data: residentes
     });
    });
  });
};
controller.listPAGOSCRUD = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM PAGOS', (err, residentes) => {
     if (err) {
      res.json(err);
     }
     res.render('Pagos_ADM', {
        data: residentes
     });
    });
  });
};

controller.savePAGOS = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO PAGOS set ?', data, (err, residente) => {
      console.log(residente)
      res.redirect('/AlertasCRUD');
    })
  })
};

controller.editPAGOS = (req, res) => {
  const { AD } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM PAGOS WHERE id = ?", [AD], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.updatePAGOS = (req, res) => {
  const { AD } = req.params;
  const newresidente = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE PAGOS set ? where id = ?', [newresidente, AD], (err, rows) => {
    res.redirect('/PagosCRUD');
  });
  });
};

controller.deletePAGOS = (req, res) => {
  const { AD } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM PAGOS WHERE id = ?', [AD], (err, rows) => {
      res.redirect('/PagosCRUD');
    });
  });
}
module.exports = controller;
