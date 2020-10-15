const mongoose = require("mongoose");
const { Schema } = mongoose;
const model = mongoose.model;
const prompt = require("prompt-sync")();

const user = new Schema({
    name: String,
    comments: String,
});

const username = prompt("Read name: ");

console.log(`Hello, ${username}`);
