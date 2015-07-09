//var triggerTest = transform;

public var areaTagName = "";

function OnTriggerEnter(other : Collider) {
	var sphereTest = GameObject.FindGameObjectsWithTag(areaTagName);
	
	for(var i = 0; i < sphereTest.length; i++){
	var collider1 = sphereTest.GetComponent(Collider);
	collider1.enabled = true;
	
	}
	
	
	
	

}

function OnTriggerExit(other : Collider) {
	var sphereTest = GameObject.FindGameObjectsWithTag(areaTagName);
	var collider2 = sphereTest.GetComponent(Collider);
	collider2.enabled = false;
	var script = sphereTest.GetComponent(switchMaterial);
	script.enabled = false;



}