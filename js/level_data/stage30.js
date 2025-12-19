import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage30 = {
  id:30,
  map: [
    [1, 3, 0, 0, 3, 7, 0, 0, 3, 1],
    [4, 0, 3, 8, 8, 3, 3, 0, 0, 3],
    [0, 0, 1, 4, 1, 1, 1, 1, 8, 0],
    [3, 1, 1, 1, 1, 1, 8, 3, 1, 0],
    [4, 1, 1, 1, 3, 0, 3, 6, 1, 0],
    [0, 1, 1, 1, 11, 1, 1, 1, 1, 3],
    [0, 1, 1, 1, 10, 1, 1, 0, 8, 0],
    [0, 1, 8, 1, 2, 0, 0, 3, 1, 0],
    [0, 8, 3, 1, 1, 1, 1, 1, 1, 3],
    [3, 3, 0, 3, 0, 0, 0, 4, 3, 3]
  ],
  objects: [
    { type: "arrow", x: 0, y: 9, dir: "UP" },
    { type: "arrow", x: 1, y: 9, dir: "UP" },
    { type: "arrow", x: 2, y: 8, dir: "UP" },
    { type: "arrow", x: 3, y: 9, dir: "UP" },
    { type: "arrow", x: 9, y: 9, dir: "UP" },
    { type: "arrow", x: 9, y: 8, dir: "LEFT" },
    { type: "arrow", x: 8, y: 9, dir: "RIGHT" },
    { type: "arrow", x: 7, y: 7, dir: "RIGHT" },
    { type: "arrow", x: 9, y: 5, dir: "LEFT" },
    { type: "arrow", x: 9, y: 1, dir: "DOWN" },
    { type: "arrow", x: 8, y: 0, dir: "DOWN" },
    { type: "arrow", x: 6, y: 1, dir: "RIGHT" },
    { type: "arrow", x: 5, y: 1, dir: "UP" },
    { type: "arrow", x: 7, y: 3, dir: "UP" },
    { type: "arrow", x: 6, y: 4, dir: "UP" },
    { type: "arrow", x: 0, y: 3, dir: "RIGHT" },
    { type: "arrow", x: 4, y: 4, dir: "RIGHT" },
    { type: "arrow", x: 2, y: 1, dir: "RIGHT" },
    { type: "arrow", x: 1, y: 0, dir: "RIGHT" },
    { type: "arrow", x: 4, y: 0, dir: "DOWN" },
    { type: "switch", x: 5, y: 0, dir: "UP" },
    { type: "warp", x: 0, y: 1, dir: "DOWN", color: "#e91e63" },
    { type: "warp", x: 3, y: 2, dir: "DOWN", color: "#e91e63" },
    { type: "warp", x: 0, y: 4, dir: "DOWN", color: "#1abc9c" },
    { type: "warp", x: 7, y: 9, dir: "LEFT", color: "#1abc9c" },
    { type: "fire_button", x: 4, y: 5, dir: "UP", color: "#ff4d4d" },
    { type: "dragon", x: 4, y: 6, dir: "RIGHT", isActive: true, color: "#ff4d4d" }
  ],
  items: [
    { type: "can", x: 0, y: 2 }
  ],
  characters: [
    DIR.RIGHT,
    DIR.RIGHT,
    DIR.LEFT
  ]

};