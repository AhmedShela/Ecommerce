'use strict';
require('dotenv').config();
const express = require('express');
const server = express();
const psql = require('pg');
const client = new psql.Client(process.env.DATABASE_URL);
const PORT = process.env.PORT || 3030;


client.connect(()=>{
    server.listen(PORT,()=>{
        console.log('LISTINING ON PORT: ', PORT);
    })
})