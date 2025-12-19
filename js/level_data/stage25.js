import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage25 = {
  id:25,

  map: [
    [1, 11, 3, 1, 1, 1, 2],
    [1, 1, 0, 1, 10, 1, 0],
    [3, 0, 0, 7, 0, 1, 0],
    [0, 1, 0, 1, 3, 0, 3],
    [0, 1, 0, 1, 0, 1, 1],
    [0, 1, 3, 0, 0, 1, 1],
    [0, 0, 0, 0, 3, 1, 1]
  ],
  objects: [
    { type: "fire_button", x: 1, y: 0, dir: "UP", color: "#e91e63" },
    { type: "dragon", x: 4, y: 1, dir: "RIGHT", isActive: true, color: "#e91e63" },
    { type: "arrow", x: 2, y: 0, dir: "RIGHT" },
    { type: "arrow", x: 0, y: 2, dir: "RIGHT" },
    { type: "arrow", x: 2, y: 5, dir: "UP" },
    { type: "arrow", x: 4, y: 3, dir: "LEFT" },
    { type: "arrow", x: 4, y: 6, dir: "UP" },
    { type: "arrow", x: 6, y: 3, dir: "DOWN" },
    { type: "switch", x: 3, y: 2, dir: "UP" }
  ],
  items: [
    { type: "can", x: 5, y: 3 }
  ],
  characters: [
    DIR.RIGHT,
    DIR.LEFT,
    DIR.UP
  ]

};