const { Router } = require("express");
const Contract = require("../../models/contracts")

const router = Router();

router.put("/:_id", async (req, res) => {

  try {
    const detail = req.body;
    const { _id } = req.params;

    try {
      
      const updateData = await Contract.findByIdAndUpdate( { _id : _id} ,detail )
      
      console.log({ message: "Los datos fueron actualizados correctamente" })
      return res.status(200).json(updateData);   

      } catch (error) {
        console.error(error);
      }
    
    } catch (error) {
      console.log(error)
        res.status(401).json({
        error: `No tienes los privilegios para realizar esta acción ${error}`,
      });
    } 
});

module.exports = router;