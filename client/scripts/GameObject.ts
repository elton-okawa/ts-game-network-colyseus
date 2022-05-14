import { InputBuffer } from "./InputBuffer";

export interface Vector {
  x: number;
  y: number;
}

export class GameObject {
  id: number;
  position: Vector;
  rotation: number;
  size: Vector;

  constructor() {
    this.id = 0;
    this.position = { x: 0, y: 0 };
    this.rotation = 0;
    this.size = { x: 0, y: 0 };
  }
}

export interface PlayerObject extends GameObject {
  inputs: InputBuffer;
}
