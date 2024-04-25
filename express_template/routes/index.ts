//var express = require('express');
import express from "express";
import path from "path";
import {IAuto} from "../model/interface";
var router = express.Router();

const autos:IAuto[] = [{id:1,brand: "VW", model:"Golf", ps:120},{id:2,brand: "VW", model:"Touran", ps:150},{id:3,brand: "VW", model:"Caddy", ps:90}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/anzeigen', (req, res) => {
  res.sendFile('index.html', {
    root: './../public'
  });
});

router.get('/autos', (req, res) => {
  res.json(autos);
})

router.post("/autos", (req, res) => {
  let newAuto:IAuto = {id: autos.length+1, brand: req.body.brand, model: req.body.model, ps: req.body.ps};
  res.json(newAuto);
})

module.exports = router;
