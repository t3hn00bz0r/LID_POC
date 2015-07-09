var textureToDisplay : Texture2D;
var showGUI = false;

function activateGUI(){

	showGUI = true;

}

function OnGUI () {
		if(showGUI){
		GUI.Label (Rect (10, 40, textureToDisplay.width, textureToDisplay.height),
			textureToDisplay);
			
			}
	}