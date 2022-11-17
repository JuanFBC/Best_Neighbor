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

controller.list2 = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM residente', (err, residentes) => {
     if (err) {
      res.json(err);
     }
     res.render('residentes copy', {
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

module.exports = controller;
