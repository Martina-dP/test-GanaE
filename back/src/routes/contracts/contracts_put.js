const { Router } = require("express");
const User = require("../../models/contracts")

const router = Router();

router.put("/:id", async (req, res) => {
    const {_id} = req.params
    
    try{  
        const contract = await Contract.findOne({
            where: {
                _id: _id
            }
        })
       
        const contractUpdated = await contract.save()
        res.status(200).send(contractUpdated);

    }catch{
        res.status(500).send("Ecurrió un error");
    }
});

module.exports = router;