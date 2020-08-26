const express = require('express');
const router = express.Router();

//RELEASES PAGE
router.get('/airvolee', (req, res) =>  {
        res.render('../views/Airvolee');
    });

module.exports = router;