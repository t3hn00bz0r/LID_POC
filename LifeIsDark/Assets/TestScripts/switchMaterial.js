
 function OnMouseOver () {
        
        print("mouse is looking at me");  
        var test = gameObject.GetComponent.<Renderer>();
        test.material.shader = Shader.Find("Specular");
     
 }
 
 function OnMouseExit () {
 
 
 		print("mouse is NOT looking at me");  
        var test = gameObject.GetComponent.<Renderer>();
        test.material.shader = Shader.Find("Diffuse");
 
 
 
 }