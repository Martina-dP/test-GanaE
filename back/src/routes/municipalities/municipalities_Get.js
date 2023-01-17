const { Router } = require("express");
const Municipaliti = require("../../models/municipalities");

const router = Router();

router.get("/", async function( req, res) {
    const municipalities = await Municipaliti.find({});
    res.json(municipalities);
      
});

module.exports = router;