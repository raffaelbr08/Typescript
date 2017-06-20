import {Spacecraft, Containership} from './base-ships'
import {MillenniumFalcon} from './starfighter.ts'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargaContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`);