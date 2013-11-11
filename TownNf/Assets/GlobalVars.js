#pragma strict

function Start () {

}
//status used to control game
static var status = 0;

static var playerTurn = 0;
static var diceRolled = 0;
static var rolled = 0;
static var numberOfPlayer = 6;
static var finishedMoving = 1;

static var currentNumber = 10;
static var previousNumber = 0;
private var counter = 0;

//variables for cards
static var currentCharPosition = 0;
static var readyToDraw = false;


static var RollPhase = 2;
static var MovePhase = 3;
static var GetCardPhase = 4;

function Update () 
{
	if(currentNumber == previousNumber && diceRolled != 1)
	{
		counter++;
		if(counter == 100)
		{
			rolled = currentNumber;
			diceRolled = 1;
		}
	}
	else if(diceRolled != 1)
	{
		previousNumber = currentNumber;
		counter = 0;
	}
    if(rolled != 0 && diceRolled == 1)
    {
        status = MovePhase;
    }
    else if(readyToDraw)
    {
        status = GetCardPhase;
    }
    else if(status == GetCardPhase && readyToDraw == false)
    {
        status = MovePhase;
    }

}