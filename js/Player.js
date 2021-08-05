class Player {
    constructor() {
        this.name = null;
        this.position = 0;
    }

    getName() {
        var playerName = database.ref("player/name");
    playerName.on("value", data => {
      playerName = data.val();
      console.log(playerName)
    });
    }

    update() {
        var playername = "player/name";
        database.ref(playername).set({
          name: this.name
        });
      }

}