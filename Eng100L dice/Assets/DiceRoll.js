#pragma strict

function Start () {

}

function Update () {
   if (Input.GetButtonDown("Jump"))
   {
      GlobalVars.finishedMoving = 0;
      GlobalVars.diceRolled = 1;
      GlobalVars.rolled = 1;
   }
}