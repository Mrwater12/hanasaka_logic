import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage17 = {
  id:17,
  // ▼▼▼ 2人のキャラを定義 ▼▼▼
  
  
  map: [
    [1, 1, 4, 1, 4, 1],
    [1, 1, 0, 1, 0, 1],
    [4, 0, 5, 0, 5, 0],
    [1, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, 4, 1]
  ],
  objects: [
    { type: "glass", x: 2, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 2, dir: "UP", isSafe: true },
    { type: "warp", x: 2, y: 0, dir: "DOWN", color: "#e91e63" },
    { type: "warp", x: 4, y: 4, dir: "UP", color: "#e91e63" },
    { type: "warp", x: 4, y: 0, dir: "DOWN", color: "#1abc9c" },
    { type: "warp", x: 0, y: 2, dir: "RIGHT", color: "#1abc9c" }
  ],
  items: [
    { type: "can", x: 2, y: 2 }
  ],
  characters: [
    DIR.LEFT
  ]


};