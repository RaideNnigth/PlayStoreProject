const gameManager = new GameManager()
gameManager.start();

$(document).ready(function() {
    $('.game-container').click(function() {
        console.log(this.id);
    })

});