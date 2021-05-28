class Form 
{ constructor() { }
   display()
 {
     var title = createElement('h2') 
     title.html("Car Racing Game");//tittle for the game 
     title.position(130, 0); //positioning the display of the tittle
     var input = createInput("Name");//creating the input text box
     var button = createButton('Play');//creating the button
     input.position(130, 160);//position
     button.position(250, 200);
     button.mousePressed(function()//hinding the button once the buttom is clicked
    {
     input.hide();
     button.hide();
     var name = input.value(); //value is html function to input the vlues in the text box
     playerCount+=1;
     player.update(name);
     player.updateCount(playerCount);
        // var greeting = createElement('h3');
        //  greeting.html("Hello " + name )greeting.position(130, 160) });
   })
  }
}
