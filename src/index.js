import raf from 'raf';
import canvas from './canvas';
import assets from './assets';

class Game {
  constructor() {
    this.ctx = canvas.getContext('2d');
    this.assets = assets;
    this.loaded = this.assets.loaded;
    this.mouseDown = false;

    this.virus = {
      level: 0,
      addons: [{
        type: 'a',
        complexity: 1,
      }],
    };

    this.antivirus = {
      level: 0,
      addons: [{

      }],
    };

    this.world = {
      computers: 10,
      infected: 0,
      offline: 0,
    };
    this.bitcoins = 0;

    this.setEventHandlers();
  }

  start() {
    let lastTime = (new Date()).getTime();

    const gameLoop = () => {
      const currentTime = (new Date()).getTime();

      if (currentTime - lastTime >= 1000) {
        lastTime = currentTime;
      }

      this.update();
      this.render();

      raf(gameLoop);
    };

    raf(gameLoop);
  }

  update() {
    // console.log('update');
  }

  render() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.ctx.fillStyle = '#FFF';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  setEventHandlers() {
    canvas.addEventListener('mouseup', e => {
      this.mouseDown = false;
    });

    canvas.addEventListener('mousedown', e => {
      this.mouseDown = true;
    });
  }
}

const game = new Game();
game.start();
