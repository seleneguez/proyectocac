const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

router.get('contacto', (req, res)=>{
    res.render('contacto/index')
});
 router.post('/contacto', (req, res)=>{
     res.send(req.body);
 })

module.exports = router;