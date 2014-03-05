public var faceValue = 0;

function OnTriggerEnter( other : Collider ) {

dieGameObject = GameObject.Find("SixSidedDie");

dieValueComponent = dieGameObject.GetComponent("DieValue");
if(GlobalVars.startingGame == true)
{
	faceValue = 0;
}

dieValueComponent.currentValue = faceValue;

GlobalVars.currentNumber = faceValue;

Debug.Log(faceValue);

}