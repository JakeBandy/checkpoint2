// const employees = require('../index')
// const mysql = require("mysql")
// const pool = require("../Sql/connection")




// const getEmployees = (req, res) => {
//     pool.query('SELECT * FROM  LIMIT', (err, rows) => {
//         if (err) {
//           console.log({ 'message': 'Error occurred: ' + err })
//           return res.status(500).send('An unexpected error occurred')
//         }
//         res.json(rows)
//       });
    
// };

// const  = (req, res) => {
//     const {id} = req.params;
//     let sql = "SELECT ??, ?? FROM ?? WHERE ?? = ?";
//     const replacements = ["", "", "", "", ];
//     sql = mysql.format(sql, replacements);

//   pool.query(sql, (err, rows) => {
//     if (err) {
//       console.log({ message: "Error occurred: " + err });
//       return res.status(500).send("An unexpected error occurred");
//     }
//     res.json(rows);
//   })
    
// };

// const  = (req, res) => {
//     const {first_name} = req.params;
//     let sql = "SELECT ?? FROM ?? WHERE ?? = ?";
//     const replacements = ["", "", "", ];
//     sql = mysql.format(sql, replacements);

//   pool.query(sql, (err, rows) => {
//     if (err) {
//       console.log({ message: "Error occurred: " + err });
//       return res.status(500).send("An unexpected error occurred");
//     }
//     res.json(rows);
//   })
// };


// module.exports = { 
  
// }