class Form {
    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Play");
    }

    setElementsPosition() {
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 90, height / 2 - 20);
      }
    
      //setElementsStyle() { 
        ////this.input.class("customInput");
        //this.playButton.class("customButton");
      //}
    
      hide() {
        this.playButton.hide();
        this.input.hide();
      }

      handleMousePressed() {
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          player = new Player();
          player.name = this.input.value();
          player.update();
        });
      }

      display() {
        this.setElementsPosition();
        //this.setElementsStyle();
        this.handleMousePressed();
      }

}