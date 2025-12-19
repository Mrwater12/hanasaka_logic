import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage28 = {
  id:28,

  map: [
    [1, 0, 0, 0, 0, 4, 10, 1],
    [4, 5, 6, 5, 6, 5, 5, 2],
    [0, 5, 3, 5, 5, 5, 5, 0],
    [0, 3, 5, 3, 5, 6, 5, 0],
    [0, 5, 5, 3, 5, 5, 5, 4],
    [0, 5, 5, 5, 3, 5, 6, 0],
    [0, 5, 3, 5, 5, 5, 5, 0],
    [1, 4, 0, 0, 11, 2, 0, 1]
  ],
  objects: [
    { type: "glass", x: 1, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 6, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 6, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 3, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 3, dir: "UP", isSafe: true },
    { type: "glass", x: 6, y: 3, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 6, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 6, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 6, y: 6, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 6, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 6, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 6, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 5, dir: "UP", isSafe: true },
    { type: "warp", x: 0, y: 1, dir: "RIGHT", color: "#e91e63" },
    { type: "warp", x: 7, y: 4, dir: "LEFT", color: "#e91e63" },
    { type: "warp", x: 5, y: 0, dir: "DOWN", color: "#1abc9c" },
    { type: "warp", x: 1, y: 7, dir: "UP", color: "#1abc9c" },
    { type: "arrow", x: 4, y: 5, dir: "DOWN" },
    { type: "arrow", x: 2, y: 2, dir: "RIGHT" },
    { type: "arrow", x: 1, y: 3, dir: "DOWN" },
    { type: "dragon", x: 6, y: 0, dir: "DOWN", isActive: true, color: "#ff4d4d" },
    { type: "fire_button", x: 4, y: 7, dir: "UP", color: "#ff4d4d" },
    { type: "arrow", x: 3, y: 4, dir: "RIGHT" },
    { type: "arrow", x: 3, y: 3, dir: "LEFT" },
    { type: "arrow", x: 2, y: 6, dir: "UP" }
  ],
  items: [
    { type: "can", x: 1, y: 1 },
    { type: "can", x: 2, y: 3 }
  ],
  characters: [
    DIR.DOWN,
    DIR.LEFT,
    DIR.UP
  ]
};