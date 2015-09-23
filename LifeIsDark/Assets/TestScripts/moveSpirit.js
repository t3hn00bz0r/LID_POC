
	// The target marker.
	var target: Transform;
	// Speed in units per sec.
	var speed: float;
	var spirit : GameObject;
	var timePassed : float;
	var spiritLength : float;
	var endTime : float;
	
//This will move the spirit for the set value spritLength
//It will deactivate the spirit once it hits the spiritLength
	function Update () {
		
		
		timePassed = Time.timeSinceLevelLoad;
		// The step size is equal to speed times frame time.
		var step = speed * Time.deltaTime;
		
		// Move our position a step closer to the target.
		transform.position = Vector3.MoveTowards(transform.position, target.position, step);
		
		timePassed = Time.time - endTime;
		
		if(timePassed >= spiritLength){

			GameObject.Find("Spirit").GetComponent("moveSpirit").enabled = false;
			
			resetSpirit();
			endTime = Time.time;
		
		}

	}

	function resetSpirit(){
	
 		
		spirit.active = false;
	
	}
	
	
	