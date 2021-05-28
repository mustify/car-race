class Game
{
    constructor(){}
    getState()
   {
    var gameStateRef=database.ref('gamestate');
    gameStateRef.on("value",function (data){
      GAMESTATE=data.val()});
    }
     start()
    {
       if (GAMESTATE==0)
       {
        player = new Player();
        player.getcount();
        form = new Form();
        form.display();
       }
    
    }
     updateState(GAMESTATE)
     {
       database.ref('/').update({gamestate:GAMESTATE})
     }
}
