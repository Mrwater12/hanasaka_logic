import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage18 = {
  id:18,
  // ▼▼▼ 2人のキャラを定義 ▼▼▼
  
  
  
  map: [
    [1, 4, 1, 4, 1, 1],
    [4, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 8],
    [1, 3, 0, 0, 4, 1],
    [1, 1, 1, 0, 1, 1],
    [1, 2, 0, 3, 0, 2]
  ],
  objects: [
    { type: "arrow", x: 5, y: 1, dir: "DOWN" },
    { type: "arrow", x: 1, y: 3, dir: "UP" },
    { type: "arrow", x: 3, y: 5, dir: "LEFT" },
    { type: "warp", x: 3, y: 0, dir: "DOWN", color: "#1abc9c" },
    { type: "warp", x: 1, y: 0, dir: "DOWN", color: "#1abc9c" },
    { type: "warp", x: 4, y: 3, dir: "LEFT", color: "#e91e63" },
    { type: "warp", x: 0, y: 1, dir: "RIGHT", color: "#e91e63" }
  ],
  items: [
    { type: "can", x: 3, y: 2 },
    { type: "can", x: 3, y: 3 }
  ],
  characters: [
    DIR.LEFT,
    DIR.RIGHT
  ]

};