"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
const path_1 = __importDefault(require("path"));
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path_1.default.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(4000, () => {
    console.log('http://localhost:4000');
});
module.exports = app;
