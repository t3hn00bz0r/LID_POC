var player : Transform;
var spirit : Transform;

function Update(){

	 if(Input.GetKeyUp(KeyCode.F)){
	 	 spirit.position = player.position;
		 GameObject.Find("Spirit").GetComponent("moveSpirit").enabled = true;
	 
	 
	 }
	 
	  if(Input.GetKeyUp(KeyCode.E)){
	 
		 resetSpirit();
	 
	 
	 }



}

function resetSpirit(){
	
	GameObject.Find("Spirit").GetComponent("moveSpirit").enabled = false;
		
	spirit.position = player.position;
	
	
}