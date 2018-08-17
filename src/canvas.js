import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH } from './constants';

class Canvas {
  constructor() {
    this.instance = document.getElementById('canvas');
    this.instance.width = CANVAS_HEIGHT;
    this.instance.height = CANVAS_WIDTH;
  }
}

const canvas = new Canvas();

export default canvas.instance;
