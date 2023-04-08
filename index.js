const { query } = require("express");
const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: "127.0.0.1",
      // MySQL username,
      user: "root",
      password: "beebs",
      database: "company_db",
    },
    console.log(`Database Connected.`)
);
