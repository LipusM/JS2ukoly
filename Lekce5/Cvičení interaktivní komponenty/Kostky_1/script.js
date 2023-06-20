const c = console.log.bind(document)

import { Dice } from "./Dice/index.js";

const diceSides = [
    {
        side: `1`,
    },
    {
        side: `2`,
    },
    {
        side: `3`,
    },
    {
        side: `4`,
    },
    {
        side: `5`,
    },
    {
        side: `6`,
    },
]

const diceRow = document.querySelector("#dice-row")

const dice = diceSides.map(diceSide => Dice(diceSide))
diceRow.append(...dice)

















