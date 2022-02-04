const gameManager = new GameManager()

$(document).ready(function() {
    $('.game-container').click(function() {
        switch (this.id.slice(2,4)) {
            case "00":
                gameManager.refreshAction();
                break;
            case "62":
                gameManager.storeAction(100);
                break;
            default:
                gameManager.CallGameEmbed("game-link", "game-info");
                break;
        }
    })
});

gameManager.start();