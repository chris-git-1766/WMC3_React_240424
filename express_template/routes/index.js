"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//var express = require('express');
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const autos = [{ id: 1, brand: "VW", model: "Golf", ps: 120 }, { id: 2, brand: "VW", model: "Touran", ps: 150 }, { id: 3, brand: "VW", model: "Caddy", ps: 90 }];
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/anzeigen', (req, res) => {
    res.sendFile('index.html', {
        root: './../public'
    });
});
router.get('/autos', (req, res) => {
    res.json(autos);
});
router.post("/autos", (req, res) => {
    let newAuto = { id: autos.length + 1, brand: req.body.brand, model: req.body.model, ps: req.body.ps };
    res.json(newAuto);
});
module.exports = router;
