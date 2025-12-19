import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage15 = {
  id:15,
  // ▼▼▼ 2人のキャラを定義 ▼▼▼
  
  map: [
    [1, 1, 3, 0, 3, 2, 1],
    [1, 1, 0, 1, 0, 1, 1],
    [0, 0, 5, 0, 5, 0, 2],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 0, 3, 0, 3, 1, 1],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1]
  ],
  objects: [
    { type: "glass", x: 2, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 2, dir: "UP", isSafe: true },
    { type: "arrow", x: 4, y: 0, dir: "RIGHT" },
    { type: "arrow", x: 2, y: 4, dir: "RIGHT" },
    { type: "arrow", x: 4, y: 4, dir: "UP" },
    { type: "arrow", x: 2, y: 0, dir: "RIGHT" }
  ],
  items: [
    { type: "can", x: 2, y: 2 },
    { type: "can", x: 4, y: 2 }
  ],
  characters: [
    DIR.UP,
    DIR.RIGHT
  ]

};