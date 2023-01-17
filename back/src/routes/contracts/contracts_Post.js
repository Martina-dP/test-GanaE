const { Router } = require("express");
const Contract = require("../../models/contracts");

const router = Router();

router.post("/", async function( req, res) {
    const {
        id,
        name,
        lastName1,
        lastName2,
        document,
        postalCode,
        location,
        address,
        phone,
    } = req.body;

    try {
        
        const contractCreated = await Contract.create({
            id: id,
            name: name,
            lastName1: lastName1,
            lastName2:lastName2,
            document: document,
            postalCode: postalCode,
            location: location,
            address: address,
            phone: phone,
        })

            res.json({contractCreated});
            console.log("contract", contractCreated) 

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;