const { Router } = require("express");
const Contract = require("../../models/contracts");

const router = Router();

router.get("/", async function( req, res) {
    const contracts = await Contract.find({});
    res.json(contracts);
      
});

module.exports = router;