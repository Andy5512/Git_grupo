const controller = {};

controller.list = (req,res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customer', (err, customer)=>{
            if (err){
                res.json(err);

            }
            res.render('customers', {
                data: customer
            });
        });

    });
};

controller. save = (req, res) => {
    const data = req.body;
req.getConnection((err,conn) =>{
    conn.query('INSERT INTO customer set ? ',[data], (err, rows) =>{
        console.log(rows);
        
    } );

});
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
        res.render('customers_edit', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
      req.getConnection((err, conn) => {
    
        conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
          res.redirect('/');
      });
    });
  };
  
  controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  }
module.exports = controller;