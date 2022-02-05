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
                gameManager.callGameEmbed("game-link", "game-info");
                break;
        }
    })
});

var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

function reportStatus() {
    if (oXHR.readyState == 4)               // REQUEST COMPLETED.
        gameManager.randomizeGames(this.responseXML);      // ALL SET. NOW SHOW XML DATA.
    }
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "game_info.xml", true);      // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
oXHR.send();