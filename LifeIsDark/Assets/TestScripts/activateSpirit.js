var player : Transform;
var spirit : Transform;
var spiritGameObject : GameObject;

function Update(){

	 if(Input.GetKeyUp(KeyCode.F)){
	 	 spiritGameObject.active = true;
	 	 spirit.position = player.position;
		 GameObject.Find("Spirit").GetComponent("moveSpirit").enabled = true;
	 
	 }

}
