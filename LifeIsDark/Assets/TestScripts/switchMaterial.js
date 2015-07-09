
 function OnMouseOver () {
        
        print("mouse is looking at me");  
        var test = gameObject.GetComponent.<Renderer>();
        test.material.shader = Shader.Find("Specular");
        if(Input.GetMouseButtonDown(0)){
        	BroadcastMessage ("testThis");
        
        }
     
 }
 
 function OnMouseExit () {
 
 
 		print("mouse is NOT looking at me");  
        var test = gameObject.GetComponent.<Renderer>();
        test.material.shader = Shader.Find("Diffuse");
 
 
 
 }