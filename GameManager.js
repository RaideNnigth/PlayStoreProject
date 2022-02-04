class GameManager{
    constructor(){
        this.posExeptions = ["00", "02", "11", "12", "31", "40", "41", "62"];
        this.cellPos = "";
        this.start = () => {
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 7; j++) {
                    this.cellPos = i.toString() + j.toString();
                    if (this.posExeptions.includes())
                        pass
                    //$('#ij' + this.cellPos).css({"background-image": "src link", "outras prop"});
                    //$('#ij' + this.cellpos).addId('?game='+xmlstuff para achar o link+ '&info='+xmlstuff);
                    //aqui a gente tem q randomizar os games e setar as imagens nos game containers
                    //baseado no xml
                    //css({"propertyname":"value","propertyname":"value",...});
                    //$("p").css({"background-color": "yellow", "font-size": "200%"});
                }
            }
            
        };
        this.CallGameEmbed = (gameLink, value2) => {
            console.log(gameLink + "game link embed"); 
            console.log(value2 + "gane more info");
            
            var queryString = "?game=" + gameLink + "&info=" + value2; 
            //window.location.href = "embed.html" + queryString; 
            
            //criar a parte de remover as info do link em um novo script no embed.html
        };
        this.refreshAction = (coins) => {
            console.log(coins, " Coins value");
            //aqui a gente tem que pegar no BD os coins e ver se da pra dar refresh ou n
        };
        this.storeAction = () => {
            console.log("store action");
            //aqui a gente tem q fazer a loja ou o q for
        };
    }
}