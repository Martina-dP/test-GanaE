const { Router } = require('express');

const contractGet = require("./contracts/contracts_Get")
const contractrPost = require("./contracts/contracts_Post")
const contractPut = require("./contracts/contracts_put")
const contractDelete = require("./contracts/contracts_Delete")

const municipalitiGet = require("./municipalities/municipalities_Get")

const router = Router();

router.use('/listcontracts', contractGet);
router.use('/addcontract', contractrPost);
router.use('/modifycontract', contractPut);
router.use('/deletecontract', contractDelete);

router.use('/getlocalidad', municipalitiGet);

module.exports = router;