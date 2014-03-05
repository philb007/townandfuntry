#pragma strict

var green = false;
var blue = false;
var pink = false;
var red = false;

//used to go inbetween displaying card and not
var state = 0;

//Need var string array

function Start () {

}

function Update () {
    //only update if it is GetCardPhase
    if(GlobalVars.status == GlobalVars.GetCardPhase)
    {
        //change to display state only if it is first time running in here
        if(state == 0 && !green && !blue && !pink && !red)
        {
            state = 1;
        }
        else if(state == 1)
        {
            var color = GlobalVars.currentCharPosition%4;
            if(color == 0)
            {
                blue = true; 
            }
            if(color == 1)
            {
                green = true;
            }
            if(color == 2)
            {
                pink = true;
            }
            if(color == 3)
            {
                red = true;
            }
        }
    }
    
}
/*
function create()
{
	instanctiate()
}
*/

function OnGUI()
{
    if(GlobalVars.endGame == true)
    {
        GUI.backgroundColor = Color.black;
        //Stop displaying
        state = 0;
        if (GUI.Button (Rect ((Screen.width/2)-175,(Screen.height/2)-100,350,200), "Game Done!")) 
        {
            //Debug.Log("Tried to make this end");
            green = false;
            GlobalVars.readyToDraw = false;
        }
    }
    if(blue)
    {
        //Debug.Log(GlobalVars.status);
        GUI.backgroundColor = Color.blue;
        //Stop displaying
        state = 0;
        if (GUI.Button (Rect ((Screen.width/2)-175,(Screen.height/2)-100,350,200), "I am a button")) 
        {
            
            blue = false;
            GlobalVars.readyToDraw = false;
            Debug.Log(GlobalVars.status);
        }
    }
    if(green)
    {
        GUI.backgroundColor = Color.magenta;
        //Stop displaying
        state = 0;
        if (GUI.Button (Rect ((Screen.width/2)-175,(Screen.height/2)-100,350,200), "I am a button")) 
        {
            //Debug.Log("Tried to make this end");
            green = false;
            GlobalVars.readyToDraw = false;
        }
    }
    if(pink)
    {
        GUI.backgroundColor = Color(1,.07,.57,1);
        //Stop displaying
        state = 0;
        if (GUI.Button (Rect ((Screen.width/2)-175,(Screen.height/2)-100,350,200), "I am a button")) 
        {
            
            pink = false;
            GlobalVars.readyToDraw = false;
        }
    }
    if(red)
    {
        GUI.backgroundColor = Color.red;
        //Stop displaying
        state = 0;
        if (GUI.Button (Rect ((Screen.width/2)-175,(Screen.height/2)-100,350,200), "I am a button")) 
        {
            
            red = false;
            GlobalVars.readyToDraw = false;
        }
    }
    
    
    
}