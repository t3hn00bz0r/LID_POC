
// Use this for initialization
function Start () {


}

// Update is called once per frame
function Update () {

}

function OnTriggerEnter(other : Collider) {


var triggerTest = other.name;

	if(triggerTest == "TriggerTest"){
	Debug.Log("test");
	
	}
	else
		Debug.Log("wrong place bud");

	Debug.Log(triggerTest);

}