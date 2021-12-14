const connection = require("../schema/connection");
const moment = require("moment");

class Debits {

  add(data, results) {
    const sql = `INSERT INTO debits SET ?`;
    const date = moment(data.date, "DD/MM/YYYYY").format("YYYY-MM-DD");
    const formData = { ...data, date };

    connection.query(sql, formData, (error, res) => {
      if (error) {
        results.status(400).json(error);
      } else {
        results.status(201).json(res);
      }
    });
  }

  selectById(id, results) {
    const sql = `SELECT * FROM debits WHERE id = ?`;
    connection.query(sql, id, (error, res) => {
      if (error) {
        results.status(400).json(error);
      } else {
        results.status(200).json(res[0]);
      }
    });
  }

  selectAll(results) {
    const sql = `SELECT * FROM debits`;
    connection.query(sql, (error, res) => {
      if (error) {
        results.status(400).json(error);
      } else {
        results.status(200).json(res);
      }
    });
  }

  changeById(id, data, results) {
    if(data.date){
    data.date = moment(data.date, "DD/MM/YYYYY").format("YYYY-MM-DD");
    }

    const sql = `UPDATE debits SET ? WHERE id = ?`;
    connection.query(sql, [data , id], (error, res) => {
      if (error) {
        results.status(400).json(error);
      } else {
        results.status(200).json(res);
      }
    });
  }

  deleteById(id, results) {
    const sql = `DELETE FROM debits WHERE id = ?`;
    connection.query(sql, id , (error, res) => {
      if (error) {
        results.status(400).json(error);
      } else {
        results.status(200).json(res);
      }
    });
  }
  
}

module.exports = new Debits();
