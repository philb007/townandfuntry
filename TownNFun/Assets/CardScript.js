#pragma strict

var green = false;
var blue = false;
var pink = false;
var red = false;

//used to go inbetween displaying card and not
var state = 0;

//Need var string array

var greenCardArr : Texture2D[] = new Texture2D[5];
var blueCardArr : Texture2D[] = new Texture2D[5];
var pinkCardArr : Texture2D[] = new Texture2D[5];
var redCardArr : Texture2D[] = new Texture2D[5];

var randomInt = 0; 

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
                randomInt = Random.Range(0,5);
                blue = true; 
            }
            if(color == 1)
            {
                randomInt = Random.Range(0,5);
                green = true;
            }
            if(color == 2)
            {
                randomInt = Random.Range(0,5);
                pink = true;
            }
            if(color == 3)
            {
                randomInt = Random.Range(0,5);
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
function OnMouseUp(){
    
}
function OnGUI()
{
    if(blue)
    {
        //blueCardTex.enabled = true;
    
        //Debug.Log(GlobalVars.status);
        GUI.backgroundColor = Color.blue;
        //Stop displaying
        state = 0;
        Debug.Log("blue card : " + randomInt);
        if (GUI.Button (Rect ((Screen.width/2)-200,(Screen.height/2)-300,400,600), blueCardArr[randomInt])) 
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
        Debug.Log("green card : " + randomInt);
        if (GUI.Button (Rect ((Screen.width/2)-200,(Screen.height/2)-300,400,600), greenCardArr[randomInt])) 
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
        Debug.Log("pink card : " + randomInt);
        if (GUI.Button (Rect ((Screen.width/2)-200,(Screen.height/2)-300,400,600), pinkCardArr[randomInt])) 
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
        Debug.Log("red card : " + randomInt);
        if (GUI.Button (Rect ((Screen.width/2)-200,(Screen.height/2)-300,400,600), redCardArr[randomInt])) 
        {
            
            red = false;
            GlobalVars.readyToDraw = false;
        }
    }
    
    
    
}