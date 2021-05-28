class Player
{
    constructor()
    {
      
    }
    getCount()
    {
     var playerCountRef=database.ref('playercount');
     platerCountRef.on("value",function (data){
       playerCount=data.val()});
     }
    updateName(playerName)
    
    {
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({ name:playerName})
    };
    updateCount(playerCount)
    
    {
        database.ref('/').update({ playercount:playerCount})
    };
}