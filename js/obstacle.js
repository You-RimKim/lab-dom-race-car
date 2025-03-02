// js/obstacle.js

class Obstacle extends Component {
    constructor(gameScreen) {
      super(
        gameScreen,
        Math.floor(Math.random() * 300 + 70),
        0,
        100,
        150,
        "./images/redCar.png"
      );
    }
  
    move() {
      // Move the obstacle down by 3px
      this.top += 3;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
    
  }
  



/* class Obstacle {
    constructor(gameScreen, img) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 300) + 70;
        this.top = 0;
        this.width = 100;
        this.height = 150;
        this.element = document.createElement("img");

        this.element.setAttribute("src", img);
        this.element.style.position = "absolute";

        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
}

move() {
    this.top += 3;
    this.updatePosition();
}

}
*/