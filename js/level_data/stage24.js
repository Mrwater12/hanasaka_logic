import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage24 = {
  id:24,

  map: [
    [1, 1, 1, 2, 1, 11],
    [1, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 10, 1, 0, 1, 0],
    [3, 0, 0, 0, 0, 3],
    [0, 1, 1, 0, 1, 1],
    [3, 0, 0, 3, 1, 1]
  ],
  objects: [
    { type: "dragon", x: 1, y: 3, dir: "RIGHT", isActive: true, color: "#e67e22" },
    { type: "fire_button", x: 5, y: 0, dir: "UP", color: "#e67e22" },
    { type: "arrow", x: 0, y: 4, dir: "RIGHT" },
    { type: "arrow", x: 0, y: 6, dir: "RIGHT" },
    { type: "arrow", x: 3, y: 6, dir: "UP" },
    { type: "arrow", x: 5, y: 4, dir: "UP" }
  ],
  items: [
    { type: "can", x: 3, y: 4 }
  ],
  characters: [
    DIR.RIGHT,
    DIR.DOWN
  ]

};