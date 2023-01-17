const router = require('express').Router();
const Contract = require("../../models/contracts");

router.delete('/:_id', async function(req, res) {
    const { _id } = req.params
    try {
         await Contract.destroy({
            where:{
                _id: _id
            }
        })
        return res.send("Contrato eliminado")
    } catch (error) {
        res.send("No se pudo eliminar")
    }
});

module.exports = router;