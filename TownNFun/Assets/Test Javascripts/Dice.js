#pragma strict

function Start () {



}


static var someGlobal = 4;

function Update () {
    if (Input.GetButtonDown("Jump"))
    {
        someGlobal++;
    }
}