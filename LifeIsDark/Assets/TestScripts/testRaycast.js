var lastObject = gameObject;
function Update() {
			
			
			
			var hitObj : RaycastHit;
			var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			
			if (Physics.Raycast(ray, hitObj)) {
				if (hitObj.collider.gameObject.tag == "testObjectSphere"){
					Debug.Log("raycast is working");
					Debug.Log( "collide (name) : " + hitObj.collider.gameObject.name );
					var mat1 = hitObj.collider.gameObject.GetComponent.<Renderer>();
					var mat2 = hitObj.collider.gameObject.GetComponent.<Renderer>();
					Debug.Log(mat1);
					mat1.material.shader = Shader.Find("Specular");
					
					lastObject = hitObj.collider.gameObject;
					hitObject = true;
					}
					
					
					 
			}
			
			
		lastObject.material.shader = Shader.Find("Diffuse");
			
			
}