const controller = {};

controller.list = (req,res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM cliente', (err, cliente)=>{
            if (err){
                res.json(err);

            }
            res.render('cliente', {
                data: cliente
            });
        });

    });
};

controller. save = (req, res) => {
    const data = req.body;
req.getConnection((err,conn) =>{
    conn.query('INSERT INTO cliente set ? ',[data], (err, rows) =>{
        console.log(rows);

    } );

});
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM cliente WHERE id = ?", [id], (err, rows) => {
        res.render('cliente_edit', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.update = (req, res) => {
    const { id } = req.params;
    const newCleinte = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE cliente set ? where id = ?', [newCliente, id], (err, rows) => {
      res.redirect('/');
    });
    });
  };
  
  controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM cliente WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  }
module.exports = controller;