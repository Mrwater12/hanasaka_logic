import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage26 = {
  id:26,

  map: [
    [1, 4, 0, 3, 0, 0, 3, 1],
    [1, 1, 1, 0, 1, 1, 0, 1],
    [4, 1, 1, 0, 0, 0, 0, 4],
    [0, 1, 1, 0, 1, 1, 0, 1],
    [0, 1, 10, 0, 1, 11, 3, 7],
    [0, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 3, 0, 0, 0, 4],
    [2, 1, 1, 1, 1, 1, 1, 1]
  ],
  objects: [
    { type: "warp", x: 1, y: 0, dir: "RIGHT", color: "#e91e63" },
    { type: "warp", x: 0, y: 2, dir: "DOWN", color: "#e91e63" },
    { type: "warp", x: 7, y: 2, dir: "LEFT", color: "#1abc9c" },
    { type: "warp", x: 7, y: 6, dir: "LEFT", color: "#1abc9c" },
    { type: "dragon", x: 2, y: 4, dir: "LEFT", isActive: true, color: "#ff4d4d" },
    { type: "fire_button", x: 5, y: 4, dir: "UP", color: "#ff4d4d" },
    { type: "arrow", x: 3, y: 0, dir: "RIGHT" },
    { type: "arrow", x: 6, y: 0, dir: "DOWN" },
    { type: "arrow", x: 3, y: 6, dir: "UP" },
    { type: "arrow", x: 6, y: 4, dir: "RIGHT" },
    { type: "switch", x: 7, y: 4, dir: "UP" }
  ],
  items: [
    { type: "can", x: 6, y: 2 }
  ],
  characters: [
    DIR.RIGHT,
    DIR.LEFT,
    DIR.UP
  ]


};