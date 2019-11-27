import {fatorial} from './fatorial'

console.log('=== n-fatorial ===')

const argv = require('yargs').demandOption('num').argv

const num = argv.num 

console.log(`O numero ${num} tem fatorial ${fatorial(num)}`)