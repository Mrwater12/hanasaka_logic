import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage21 = {
  id:21,
  map: [
    [3, 0, 0, 3, 0, 0, 3],
    [0, 1, 1, 8, 1, 1, 0],
    [3, 0, 6, 1, 3, 0, 3],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 6, 1, 1, 2],
    [0, 0, 3, 7, 1, 1, 1],
    [1, 1, 1, 3, 0, 2, 1]
  ],
  objects: [
    { type: "arrow", x: 0, y: 0, dir: "DOWN" },
    { type: "arrow", x: 3, y: 0, dir: "DOWN" },
    { type: "arrow", x: 6, y: 0, dir: "LEFT" },
    { type: "arrow", x: 6, y: 2, dir: "UP" },
    { type: "arrow", x: 4, y: 2, dir: "LEFT" },
    { type: "arrow", x: 0, y: 2, dir: "RIGHT" },
    { type: "arrow", x: 2, y: 5, dir: "RIGHT" },
    { type: "arrow", x: 3, y: 6, dir: "LEFT" },
    { type: "switch", x: 3, y: 5, dir: "UP" }
  ],
  items: [
    { type: "can", x: 4, y: 0 },
    { type: "can", x: 1, y: 2 }
  ],
  characters: [
    DIR.UP,
    DIR.LEFT,
    DIR.DOWN
  ]
};