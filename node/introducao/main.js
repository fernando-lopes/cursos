"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
const argv = require('yargs').demandOption('num').argv;
const num = argv.num;
console.log(`O numero ${num} tem fatorial ${fatorial_1.fatorial(num)}`);
