const { Router } = require('express');

const contractGet = require("./contracts/contracts_Get")
const contractrPost = require("./contracts/contracts_Post")
const contractPut = require("./contracts/contracts_put")
const contractDelete = require("./contracts/contracts_Delete")

const municipalitiGet = require("./municipalities/municipalities_Get")

const router = Router();

router.use('/contracts', contractGet);
router.use('/create', contractrPost);
router.use('/update', contractPut);
router.use('/delete', contractDelete);

router.use('/municipalities', municipalitiGet);

module.exports = router;