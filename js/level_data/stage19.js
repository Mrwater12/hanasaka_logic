import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage19 = {
  id:19,
  map: [
    [1, 1, 1, 1, 1, 4, 1],
    [1, 1, 1, 4, 1, 0, 1],
    [1, 1, 7, 0, 0, 3, 0],
    [2, 1, 0, 0, 1, 0, 1],
    [0, 1, 3, 0, 0, 0, 4],
    [3, 0, 0, 3, 1, 0, 1],
    [1, 1, 1, 0, 1, 3, 4]
  ],
  objects: [
    { type: "warp", x: 5, y: 0, dir: "DOWN", color: "#e91e63" },
    { type: "warp", x: 6, y: 4, dir: "LEFT", color: "#e91e63" },
    { type: "warp", x: 3, y: 1, dir: "DOWN", color: "#1abc9c" },
    { type: "warp", x: 6, y: 6, dir: "LEFT", color: "#1abc9c" },
    { type: "arrow", x: 0, y: 5, dir: "DOWN" },
    { type: "arrow", x: 2, y: 4, dir: "UP" },
    { type: "arrow", x: 3, y: 5, dir: "RIGHT" },
    { type: "arrow", x: 5, y: 6, dir: "RIGHT" },
    { type: "arrow", x: 5, y: 2, dir: "DOWN" },
    { type: "switch", x: 2, y: 2, dir: "UP" }
  ],
  items: [
    { type: "can", x: 5, y: 5 }
  ],
  characters: [
    DIR.UP,
    DIR.RIGHT
  ]
};