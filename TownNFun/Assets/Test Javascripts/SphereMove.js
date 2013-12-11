#pragma strict

function Start () {

}

function Update () {
    if (Input.GetButtonDown("Jump"))
    {
        if(Dice.someGlobal > 5)
        {
            var x = Input.GetAxis("Horizontal");
            var z = Input.GetAxis("Vertical");
            transform.Translate(x+5, 0 , z+5);
        }
    }
}