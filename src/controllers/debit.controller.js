const Debit = require("../models/debits.models");

module.exports = (app) => {
  app.get("/debit", (req, res) => {
    Debit.selectAll(res);
  });

  app.get("/debit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Debit.selectById(id, res);
  });

  app.post("/debit", (req, res) => {
    Debit.add(res);
  });

  app.patch("/debit/:id", (req,res)=>{
      const id = parseInt(req.params.id);
      const datas = req.body;
      Debit.changeById(id,datas,res);
  })

  app.delete("/debit/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    Debit.deleteById(id, res)
  });
};
