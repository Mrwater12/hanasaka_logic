import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage16 = {
  id:16,
  // ▼▼▼ 2人のキャラを定義 ▼▼▼
  
  map: [
    [1, 3, 0, 2, 1, 4, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 3, 0, 5, 0, 5, 4],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 3, 0, 3, 1],
    [1, 0, 1, 0, 1, 2, 1]
  ],
  objects: [
    { type: "glass", x: 3, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 2, dir: "UP", isSafe: true },
    { type: "arrow", x: 1, y: 0, dir: "RIGHT" },
    { type: "arrow", x: 1, y: 2, dir: "UP" },
    { type: "arrow", x: 5, y: 4, dir: "DOWN" },
    { type: "arrow", x: 3, y: 4, dir: "RIGHT" },
    { type: "warp", x: 5, y: 0, dir: "DOWN", color: "#e91e63" },
    { type: "warp", x: 6, y: 2, dir: "LEFT", color: "#e91e63" }
  ],
  items: [
    { type: "can", x: 1, y: 4 },
    { type: "can", x: 5, y: 2 }
  ],
  characters: [
    DIR.UP,
    DIR.RIGHT
  ]

};