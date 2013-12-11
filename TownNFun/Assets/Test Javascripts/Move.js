#pragma strict


static var someGlobal = 0;

var lerpPosition : float = 0.0f;
var lerpTime : float = 5.0f;


var start : Vector3;

var star = [Vector3(-35.41315,2.721409,33.79943)];

var end = [Vector3(-27.11313, 2.721409, 34.65337), 
           Vector3(-14.65591, 2.721409, 32.93624),
           Vector3(-27.11313, 2.721409, 34.65337)];

var turn = 1;


var currentLocation = 0;


function Start () {
    start = star[0];
}



function Update () 
{


    if(turn == 1)
    {
        lerpPosition += Time.deltaTime/lerpTime;
        transform.position = Vector3.Lerp(start,end[currentLocation],lerpPosition);
    }
    
    var currentPosition = transform.TransformPoint(Vector3.zero);
    
    if(currentPosition == end[currentLocation])
    {
        if(currentPosition != 3)
        {
            start = end[currentLocation];
            currentLocation = currentLocation+1;
        }
    }
    
}