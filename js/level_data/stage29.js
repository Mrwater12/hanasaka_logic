import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage29 = {
  id:29,

  map: [
    [1, 1, 1, 4, 0, 0, 11, 1, 1, 1],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 3, 0, 0, 3, 1, 4, 1],
    [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [0, 4, 3, 1, 1, 1, 0, 3, 0, 1],
    [0, 1, 0, 1, 1, 1, 4, 1, 0, 1],
    [3, 0, 0, 8, 1, 1, 1, 8, 3, 7],
    [10, 1, 0, 3, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 0, 0, 0, 0, 0, 1, 1]
  ],
  objects: [
    { type: "arrow", x: 3, y: 2, dir: "RIGHT" },
    { type: "arrow", x: 6, y: 2, dir: "DOWN" },
    { type: "arrow", x: 2, y: 4, dir: "RIGHT" },
    { type: "arrow", x: 0, y: 6, dir: "DOWN" },
    { type: "dragon", x: 0, y: 7, dir: "UP", isActive: true, color: "#ff4d4d" },
    { type: "fire_button", x: 6, y: 0, dir: "UP", color: "#ff4d4d" },
    { type: "arrow", x: 3, y: 7, dir: "UP" },
    { type: "arrow", x: 2, y: 9, dir: "UP" },
    { type: "arrow", x: 8, y: 6, dir: "RIGHT" },
    { type: "switch", x: 9, y: 6, dir: "UP" },
    { type: "warp", x: 6, y: 5, dir: "UP", color: "#e91e63" },
    { type: "warp", x: 8, y: 2, dir: "DOWN", color: "#e91e63" },
    { type: "warp", x: 1, y: 4, dir: "RIGHT", color: "#1abc9c" },
    { type: "warp", x: 3, y: 0, dir: "RIGHT", color: "#1abc9c" },
    { type: "arrow", x: 7, y: 4, dir: "RIGHT" }
  ],
  items: [
    { type: "can", x: 1, y: 6 }
  ],
  characters: [
    DIR.UP,
    DIR.LEFT,
    DIR.LEFT
  ]
};