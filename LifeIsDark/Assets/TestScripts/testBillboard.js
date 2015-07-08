	
public var target: Transform;
var min = 245;
var max = 283;
function Update() {
	// Rotate the camera every frame so it keeps looking at the target 
	
	
	if( transform.eulerAngles.y <= min ){
		transform.eulerAngles.y = min;
	
	}
	if( transform.eulerAngles.y >= max ){
		transform.eulerAngles.y = max;
	
	}
	
	transform.LookAt(target);
	transform.eulerAngles.x = 90;
	transform.eulerAngles.z = 0;
	

	
	
}



