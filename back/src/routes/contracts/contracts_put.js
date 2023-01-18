const { Router } = require("express");
const Contract = require("../../models/contracts")

const router = Router();

router.put("/:id", async (req, res) => {
        const detail = req.body;
        const { _id } = req.params;
    
          try {

            const updateData = await Contract.updateOne(detail, _id)

          console.log(updateData)
          return res.status(200).json({ message: "Los datos fueron actualizados correctamente" });   
        
        } catch (error) {
            res.status(401);
            console.log(error)
      }
});

module.exports = router;