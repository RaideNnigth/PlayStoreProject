class GameManager{
    constructor(){
        this.posExeptions = ["00", "02", "11", "12", "31", "40", "41", "62"];
        this.cellPos = "";
        this.gameLinkList = [];
        this.randomizeGames = (xml) => { 
            this.gameLinkList = xml.getElementsByTagName("Game");
            //console.log('#ij' + this.cellpos + '?game='+ this.gameLinkList[Math.floor(Math.random() * this.gameLinkList.length)].getElementsByTagName("Link")[0].childNodes[0].nodeValue)
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 7; j++) {
                    this.cellPos = i.toString() + j.toString();
                    if (this.posExeptions.includes())
                        pass
                    
                    //resolver essa parte e ta pronto boa noite to cansado DASKDAK
                    var id = '#ij' + this.cellPos;
                    //$(id).children('a').attr('href', '#ij' + this.cellpos + '?game='+ this.gameLinkList[Math.floor(Math.random() * this.gameLinkList.length)].getElementsByTagName("Link")[0].childNodes[0].nodeValue);
                    
                    
                    /* attr('id', 'piroca');
                    console.log('#ij' + this.cellpos + '?game='+ this.gameLinkList[Math.floor(Math.random() * this.gameLinkList.length)].getElementsByTagName("Link")[0].childNodes[0]
                    + '&name=' + this.gameLinkList[Math.floor(Math.random() * this.gameLinkList.length)].getElementsByTagName("Nome")[0].childNodes[0]) */
                    
                    //var queryString = "?game=" + gameLink + "&info=" + value2; 
                    //$('#ij' + this.cellPos).css({"background-image": "src link", "outras prop"});
                    //css({"propertyname":"value","propertyname":"value",...});
                    //$("p").css({"background-color": "yellow", "font-size": "200%"});
                }
            }

                /* for (var i = 0; i < Book_List.length; i++) { */

                // CREATE CHILD DIVS INSIDE THE PARENT DIV.
                /* var divLeft = document.createElement('div');
                divLeft.className = 'col1';
                divLeft.innerHTML = Book_List[i].getElementsByTagName("BookName")[0].childNodes[0].nodeValue;

                var divRight = document.createElement('div');
                divRight.className = 'col2';
                divRight.innerHTML = Book_List[i].getElementsByTagName("Category")[0].childNodes[0].nodeValue;

                // ADD THE CHILD TO THE PARENT DIV.
                divBooks.appendChild(divLeft);
                divBooks.appendChild(divRight);
                } */
        };
        this.callGameEmbed = (gameLink, value2) => {
            //console.log(gameLink + "game link embed"); 
            //console.log(value2 + "gane more info");
            
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