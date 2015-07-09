//var triggerTest = transform;

public var areaTagName = "";

function OnTriggerEnter(other : Collider) {
	var sphereTest = GameObject.FindGameObjectsWithTag(areaTagName);
	
	for(var i : GameObject in sphereTest){
	var collider1 = i.GetComponent(Collider);
	collider1.enabled = true;
	
	}
	
	
	
	

}

function OnTriggerExit(other : Collider) {
	var sphereTest = GameObject.FindGameObjectsWithTag(areaTagName);
	
	for(var i : GameObject in sphereTest){
		var collider1 = i.GetComponent(Collider);
		collider1.enabled = false;
	
	}


}