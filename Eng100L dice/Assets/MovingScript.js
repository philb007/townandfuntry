//   This is a very simple waypoint system.
//   Each bit is explained in as much detail as possible for people (like me!) who need every single line explained.
//
//   As a side note to the inexperienced (like me at the moment!), you can delete the word "private" on any variable to see it in the inspector for debugging.
//
//   I am sure there are issues with this as is, but it seems to work pretty well as a demonstration.
//
//STEPS:
//1. Attach this script to a GameObject with a RidgidBody and a Collider.
//2. Change the "Size" variable in "Waypoints" to the number of waypoints you want to use.
//3. Drop your waypoint objects on to the empty variable slots.
//4. Make sure all your waypoint objects have colliders. (Sphere Collider is best IMO).
//5. Click the checkbox for "is Trigger" to "On" on the waypoint objects to make them triggers.
//6. Set the Size (radius for sphere collider) or just Scale for your waypoints.
//7. Have fun! Try changing variables to get different speeds and such.
//
//   Disclaimer:
//   Extreeme values will start to mess things up.
//   Maybe someone more experienced than me knows how to improve it.
//   Please correct me if any of my comments are incorrect.



var accel = 0.8; //This is the rate of accelleration after the function "Accell()" is called. Higher values will cause the object to reach the "speedLimit" in less time.

var inertia = 0.9; //This is the the amount of velocity retained after the function "Slow()" is called. Lower values cause quicker stops. A value of "1.0" will never stop. Values above "1.0" will speed up.

var speedLimit = 10.0; //This is as fast the object is allowed to go.

var minSpeed = 1.0; //This is the speed that tells the functon "Slow()" when to stop moving the object.

var stopTime = 1.0; //This is how long to pause inside "Slow()" before activating the function "Accell()" to start the script again.

//This variable "currentSpeed" is the major player for dealing with velocity.
//The "currentSpeed" is mutiplied by the variable "accel" to speed up inside the function "accell()".
//Again, The "currentSpeed" is multiplied by the variable "inertia" to slow things down inside the function "Slow()".
private var currentSpeed = 0.0;

//The variable "functionState" controlls which function, "Accell()" or "Slow()", is active. "0" is function "Accell()" and "1" is function "Slow()".
private var functionState = 0;

//The next two variables are used to make sure that while the function "Accell()" is running, the function "Slow()" can not run (as well as the reverse).
private var accelState : boolean;
private var slowState : boolean;

//This variable will store the "active" target object (the waypoint to move to).
private var waypoint : Transform;

//This is the speed the object will rotate to face the active Waypoint.
var rotationDamping = 6.0;

//If this is false, the object will rotate instantly toward the Waypoint. If true, you get smoooooth rotation baby!
var smoothRotation = true;

//This variable is an array. []< that is an array container if you didnt know. It holds all the Waypoint Objects that you assign in the inspector.
var waypoints : Transform[];

//This variable keeps track of which Waypoint Object, in the previously mentioned array variable "waypoints", is currently active.
private var WPindexPointer : int;



var state = 0;
var counter = 0;


private var characterPosition = 0;



//Functions! They do all the work.
//You can use the built in functions found here: http://unity3d.com/support/documentation/ScriptReference/MonoBehaviour.html
//Or you can declare your own! The function "Accell()" is one I declared.
//You will want to declare your own functions because theres just certain things that wont work in "Update()". Things like Coroutines: http://unity3d.com/support/documentation/ScriptReference/index.Coroutines_26_Yield.html


//The function "Start()" is called just before anything else but only one time.
function Start ()
{
   functionState = 0; //When the script starts set "0" or function Accell() to be active.
      
}






//The function "Update()" is called every frame. It can get slow if overused.
function Update ()
{
    if(GlobalVars.status == GlobalVars.MovePhase)
    {
    waypoint = waypoints[WPindexPointer]; //Keep the object pointed toward the current Waypoint object.

   if (GlobalVars.rolled != 0 && GlobalVars.diceRolled == 1 && state == 0)
   {
      state = 1;
   }

   if (state == 1) //If functionState variable is currently "0" then run "Accell()". Withouth the "if", "Accell()" would run every frame.
   {
      Accell ();
     
   }
   else if (state == 2)
   {
      Adjustment();
   }
   else
   {
      Stop();
   }
    }
}






//I declared "Accell()".
function Accell ()
{                      //
//I grabbed this next part from the unity "SmoothLookAt" script but try to explain more.
   if (waypoint) //If there is a waypoint do the next "if".
   {
      if (smoothRotation) //If smoothRotation is set to "On", do the rotation over time with nice ease in and ease out motion.
      {
         //Look at the active waypoint.
         var rotation = Quaternion.LookRotation(waypoint.position - transform.position);
         //Make the rotation nice and smooth.
         transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * rotationDamping);
      }
   }
   //Now do the accelleration toward the active waypoint untill the "speedLimit" is reached
   currentSpeed = currentSpeed + accel * accel;
   transform.Translate (0,0,Time.deltaTime * currentSpeed);
   
   //When the "speedlimit" is reached or exceeded ...
   if (currentSpeed >= speedLimit)
   {
       // ... turn off accelleration and set "currentSpeed" to be exactly the "speedLimit". Without this, the "currentSpeed will be slightly above "speedLimit"
      currentSpeed = speedLimit;
   }
}





function OnTriggerEnter ()
{
    //Decrement rolled
    GlobalVars.rolled--;
    
    //increment character position
    characterPosition++;
    
    //get next waypoint
    WPindexPointer++;
    
    //if rolled becomes zero start to reposition character
    if(GlobalVars.rolled == 0)
    {
        GlobalVars.diceRolled = 0;
        state = 2;
    }
}


function Adjustment ()
{
//Debug.Log("got to adjustment" + counter);
  transform.Translate (-Time.deltaTime * currentSpeed,0,Time.deltaTime * currentSpeed);
  counter++;
  if (counter == 10)
  {
    counter = 0;
    state = 0;
    GlobalVars.readyToDraw = true;
    GlobalVars.currentCharPosition = characterPosition;
  }
}

function Stop()
{
  transform.Translate (0,0,0);
}




