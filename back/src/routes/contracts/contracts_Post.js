const { Router } = require("express");
const Contract = require("../../models/contracts");

const router = Router();

router.post("/", async function( req, res) {
    const {
        name,
        lastName1,
        lastName2,
        documentType,
        document,
        postalCode,
        location,
        address,
        phone,
    } = req.body;

    try {
        
        const contractCreated = await Contract.create({
            name,
            lastName1,
            lastName2,
            documentType,
            document,
            postalCode,
            location,
            address,
            phone,
        })

            res.json({contractCreated});
            console.log("contract", contractCreated) 

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;