const { Router } = require("express");
const Contract = require("../../models/contracts")

const router = Router();

router.put("/:id", async (req, res) => {
    const {_id} = req.params
    const { 
        name,
        lastName1,
        lastName2,
        document,
        postalCode,
        location,
        address,
        phone,} = req.body
    
    try{  
        const contract = await Contract.findOne({
            where: {
                _id: _id
            }
        })
        name && (contract.name = name)
        lastName1 && (contract.lastName1 = lastName1)
        lastName2 && (contract.lastName2 = lastName2)
        document && (contract.document = document)
        postalCode && (contract.postalCode = postalCode)
        location && (contract.location = location)
        address && (contract.address = address)
        phone && (contract.phone = phone)
       
        const contractUpdated = await contract.save()
        res.status(200).send(contractUpdated);

    }catch{
        res.status(500).send("Ecurrió un error");
    }
});

module.exports = router;