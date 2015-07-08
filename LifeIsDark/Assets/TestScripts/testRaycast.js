
function Update() {
		
			var hit: RaycastHit;
			var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			
			if (Physics.Raycast(ray, hit)) {
				if (hit.collider.gameObject.tag == "CubeTrigger"){
					Debug.Log("raycast is working");
					Debug.Log( "collide (name) : " + hit.collider.gameObject.name );
					}
					 
			}
			
		
	}