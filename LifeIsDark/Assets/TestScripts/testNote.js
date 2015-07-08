var textureToDisplay : Texture2D;

function OnGUI () {
		GUI.Label (Rect (10, 40, textureToDisplay.width, textureToDisplay.height),
			textureToDisplay);
	}